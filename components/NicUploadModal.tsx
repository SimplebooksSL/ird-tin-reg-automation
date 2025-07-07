/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, Camera } from "lucide-react";
import storage from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface NicUploadModalProps {
  open: boolean;
  onClose: () => void;
  onOCRComplete: (data: any) => void;
}

const NicUploadModal = ({
  open,
  onClose,
  onOCRComplete,
}: NicUploadModalProps) => {
  const [uploadStep, setUploadStep] = useState(1);
  const [frontSideUploaded, setFrontSideUploaded] = useState(false);
  const [backSideUploaded, setBackSideUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({
    frontSide: [] as any[],
    backSide: [] as any[],
  });
  const [uploadingFile, setUploadingFile] = useState(false);
  const [processingOCR, setProcessingOCR] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast({
        title: "Error",
        description: "File size must be less than 5MB",
        variant: "destructive",
      });
      return false;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Error",
        description: "Only JPG, PNG, and PDF files are allowed",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadNICFile = async (file: File, side: string) => {
    try {
      const timeStamp = Date.now();
      const firebaseFileName = `nic-uploads/${side}/${timeStamp}-${file.name}`;

      const storageRef = ref(storage, firebaseFileName);
      const uploadSnap = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(uploadSnap.ref);

      const base64String = await fileToBase64(file);

      return {
        base64: base64String,
        name: file.name,
        firebaseUrl: downloadURL,
        firebaseFileName: firebaseFileName,
      };
    } catch (error) {
      console.error("Error uploading to Firebase:", error);
      const base64String = await fileToBase64(file);
      return {
        base64: base64String,
        name: file.name,
      };
    }
  };

  const processFile = async (file: File) => {
    try {
      setUploadingFile(true);
      let fileObject:
        | {
            base64: string;
            name: string;
            firebaseUrl: string;
            firebaseFileName: string;
          }
        | {
            base64: string;
            name: string;
            firebaseUrl?: undefined;
            firebaseFileName?: undefined;
          };

      if (file.type === "application/pdf") {
        fileObject = await uploadNICFile(file, "both-sides");
        if (fileObject && fileObject.firebaseUrl) {
          setFrontSideUploaded(true);
          setBackSideUploaded(true);
          setUploadedFiles({
            frontSide: [fileObject],
            backSide: [fileObject],
          });
          setUploadStep(3);
          toast({
            title: "Success",
            description: "PDF uploaded successfully! Both sides captured.",
          });
        } else {
          throw new Error("Failed to upload PDF");
        }
      } else {
        if (uploadStep === 1) {
          fileObject = await uploadNICFile(file, "front");
          if (fileObject && fileObject.firebaseUrl) {
            setFrontSideUploaded(true);
            setUploadedFiles((prev) => ({
              ...prev,
              frontSide: [fileObject],
            }));
            toast({
              title: "Success",
              description: "Front side uploaded successfully!",
            });
            setUploadStep(2);
          } else {
            throw new Error("Failed to upload front side image");
          }
        } else if (uploadStep === 2) {
          fileObject = await uploadNICFile(file, "back");
          if (fileObject && fileObject.firebaseUrl) {
            setBackSideUploaded(true);
            setUploadedFiles((prev) => ({
              ...prev,
              backSide: [fileObject],
            }));
            toast({
              title: "Success",
              description: "Back side uploaded successfully!",
            });
            setUploadStep(3);
          } else {
            throw new Error("Failed to upload back side image");
          }
        }
      }
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Error",
        description: "Error uploading file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploadingFile(false);
    }
  };

  const handleFileUpload = (files: FileList | null = null) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (validateFile(file)) {
        processFile(file);
      }
    } else if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (validateFile(file)) {
      processFile(file);
    }

    // Reset the file input
    event.target.value = "";
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setDragActive(false);
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragActive(false);
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileUpload(files);
    }
  };

  const autoFillForm = async () => {
    try {
      setProcessingOCR(true);

      if (
        uploadedFiles.frontSide.length > 0 &&
        uploadedFiles.backSide.length > 0
      ) {
        const front = uploadedFiles.frontSide[0];
        const back = uploadedFiles.backSide[0];

        const fileType = front.name.split(".").pop()?.toLowerCase();
        const isPDF =
          front.name === back.name && front.name.toLowerCase().endsWith(".pdf");

        const fileArray = isPDF
          ? [{ fileType: "pdf", firebaseUrl: front.firebaseUrl }]
          : [
              {
                fileType: front.name.split(".").pop()?.toLowerCase() || "",
                firebaseUrl: front.firebaseUrl,
              },
              {
                fileType: back.name.split(".").pop()?.toLowerCase() || "",
                firebaseUrl: back.firebaseUrl,
              },
            ];

        const ocrRequestData: any = {
          file_type: isPDF ? "pdf" : "images",
          fileType: fileArray[0].fileType, // optional, if your API uses it
          fileArray, // the array you wanted
        };

        if (isPDF) {
          ocrRequestData.pdf_url = front.firebaseUrl;
        } else {
          ocrRequestData.front_url = front.firebaseUrl;
          ocrRequestData.back_url = back.firebaseUrl;
        }

        // OCR request
        try {
          const response = await fetch(
            "https://ocr-stage.simplebooks.com/api/nic/extract-url",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(ocrRequestData),
            }
          );

          if (!response.ok) throw new Error("OCR API request failed");

          const data = await response.json();

          if (data) {
            onOCRComplete({
              ...data,
              fileArray,
            });
            closeModal();
            toast({
              title: "Success",
              description: "Form auto-filled with extracted NIC data!",
            });
          } else {
            throw new Error("OCR processing failed - invalid response data");
          }
        } catch (apiError) {
          console.error("OCR API Error:", apiError);
          closeModal();
          toast({
            title: "Error",
            description: "NIC data processing failed. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error",
          description: "Please upload both sides of the NIC first.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error auto-filling form:", error);
      toast({
        title: "Error",
        description: "Error processing NIC data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProcessingOCR(false);
    }
  };

  const resetUploadState = () => {
    setUploadStep(1);
    setFrontSideUploaded(false);
    setBackSideUploaded(false);
    setUploadedFiles({ frontSide: [], backSide: [] });
    setDragActive(false);
    setProcessingOCR(false);
    setUploadingFile(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const closeModal = () => {
    resetUploadState();
    onClose();
  };

  const handleClose = () => {
    if (!processingOCR && !uploadingFile) {
      closeModal();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl">
        {/* Add DialogTitle for accessibility, visually hidden */}
        <DialogTitle className="sr-only">
          Upload NIC to Auto-Fill Details
        </DialogTitle>
        <div className="text-center">
          <Camera className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">
            Upload NIC to Auto-Fill Details
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Upload both sides of your National Identity Card to automatically
            fill the form
          </p>
        </div>

        {uploadStep < 3 ? (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-medium mb-2">
                Step {uploadStep} of 2: Upload{" "}
                {uploadStep === 1 ? "Front" : "Back"} Side
              </p>
              <Progress value={uploadStep === 1 ? 0 : 50} className="mb-4" />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileSelected}
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
            />

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
              }`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-4">
                Drag & drop or choose an image file (JPG, PNG, PDF)
              </p>
              <Button
                onClick={() => handleFileUpload()}
                disabled={uploadingFile}
                className="w-full"
              >
                {uploadingFile
                  ? "Uploading..."
                  : `Select ${uploadStep === 1 ? "Front" : "Back"} Side`}
              </Button>
            </div>

            {uploadStep === 2 && frontSideUploaded && (
              <div className="text-sm text-green-600 text-center">
                ✓ Front side uploaded: {uploadedFiles.frontSide[0]?.name}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-green-600">
              <p className="text-sm mb-2">✓ Both sides uploaded successfully</p>
              <p className="text-xs text-gray-600">
                Front: {uploadedFiles.frontSide[0]?.name}
              </p>
              <p className="text-xs text-gray-600">
                Back: {uploadedFiles.backSide[0]?.name}
              </p>
            </div>

            <Button
              onClick={autoFillForm}
              disabled={processingOCR}
              className="w-full"
              size="lg"
            >
              {processingOCR ? "Extracting Data..." : "Auto-Fill Form"}
            </Button>

            {processingOCR && (
              <div className="text-sm text-blue-600">
                Please wait while we extract information from your NIC...
              </div>
            )}
          </div>
        )}

        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={handleClose}
          disabled={processingOCR || uploadingFile}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NicUploadModal;
