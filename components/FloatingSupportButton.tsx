"use client";
import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, Headphones } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FloatingSupportButton = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolling
      setIsHidden(false);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to hide button after scroll stops
      const newTimeout = setTimeout(() => {
        setIsHidden(true);
      }, 2000);

      setScrollTimeout(newTimeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const contactLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/+94772705624",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      description: "Chat with us instantly",
    },
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:taxteam@simplebooks.com",
      bgColor: "bg-[#FF612F]",
      hoverColor: "hover:bg-[#FF612F]/90",
      description: "Send us your queries",
    },
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:+94772705624",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      description: "Speak with our experts",
    },
  ];

  const handleContactClick = (href: string) => {
    window.open(href, "_blank");
    setShowDialog(false);
  };

  return (
    <>
      {/* Floating Support Button - Only visible on mobile/tablet */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isHidden ? "translate-x-3/4" : "translate-x-0"
          }`}
        >
          <Button
            onClick={() => setShowDialog(true)}
            className="w-14 h-14 rounded-full bg-[#080A3C] hover:bg-[#080A3C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            size="icon"
          >
            <Headphones className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          </Button>
        </div>

        {/* Partial visibility indicator when hidden */}
        {isHidden && (
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#FF612F] rounded-l-full animate-pulse" />
        )}
      </div>

      {/* Support Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-md mx-auto bg-white border-gray-200 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-center text-[#080A3C] text-xl font-semibold font-poppins">
              Need Expert Support?
            </DialogTitle>
            <p className="text-center text-[#080A3C]/70 text-sm font-poppins mt-2">
              Our experts are ready to help you every step of the way
            </p>
          </DialogHeader>

          <div className="space-y-3 py-2">
            {contactLinks.map((contact, index) => (
              <Button
                key={contact.label}
                onClick={() => handleContactClick(contact.href)}
                variant="outline"
                className="w-full flex items-center gap-4 p-4 h-auto border border-[#080A3C]/20 hover:border-[#080A3C] hover:bg-[#080A3C]/5 text-[#080A3C] rounded-lg transition-all duration-200 hover:shadow-sm font-poppins"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-12 h-12 ${contact.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <contact.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <span className="font-semibold text-base text-[#080A3C] block">
                    {contact.label}
                  </span>
                  <p className="text-sm text-[#080A3C]/60 mt-0.5 font-poppins">
                    {contact.description}
                  </p>
                </div>
              </Button>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-[#080A3C]/10">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#FF612F] rounded-full"></div>
              <p className="text-xs text-[#080A3C]/50 font-poppins font-medium tracking-wide">
                SIMPLEBOOKS SUPPORT
              </p>
              <div className="w-2 h-2 bg-[#FF612F] rounded-full"></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingSupportButton;
