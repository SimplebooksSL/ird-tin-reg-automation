
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DatePickerProps {
  value?: string;
  onChange?: (date: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  maxDate?: Date;
  minDate?: Date;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled = false,
  className,
  id,
  maxDate,
  minDate,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  
  // Convert string value to Date object for calendar
  const selectedDate = value ? new Date(value) : undefined;
  
  // Initialize month based on selected date or current date
  const [month, setMonth] = React.useState<Date>(() => {
    return selectedDate || new Date();
  });

  // Update month when value changes (for auto-filled dates)
  React.useEffect(() => {
    if (selectedDate) {
      setMonth(selectedDate);
    }
  }, [value]);
  
  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (date && onChange) {
      // Format date as YYYY-MM-DD for consistency with HTML date input
      const formattedDate = format(date, "yyyy-MM-dd");
      onChange(formattedDate);
    }
    setOpen(false);
  };

  // Default date constraints
  const defaultMaxDate = maxDate || new Date();
  const defaultMinDate = minDate || new Date("1900-01-01");

  // Generate year options
  const currentYear = new Date().getFullYear();
  const minYear = defaultMinDate.getFullYear();
  const maxYear = defaultMaxDate.getFullYear();
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);

  // Generate month options
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleMonthChange = (monthIndex: string) => {
    const newMonth = new Date(month.getFullYear(), parseInt(monthIndex), 1);
    setMonth(newMonth);
  };

  const handleYearChange = (year: string) => {
    const newMonth = new Date(parseInt(year), month.getMonth(), 1);
    setMonth(newMonth);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal h-10",
            !selectedDate && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3 border-b">
          <div className="flex items-center justify-between gap-2">
            <Select
              value={month.getMonth().toString()}
              onValueChange={handleMonthChange}
            >
              <SelectTrigger className="w-[110px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((monthName, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {monthName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select
              value={month.getFullYear().toString()}
              onValueChange={handleYearChange}
            >
              <SelectTrigger className="w-[80px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {years.reverse().map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          month={month}
          onMonthChange={setMonth}
          disabled={(date) =>
            date > defaultMaxDate || date < defaultMinDate
          }
          initialFocus
          className="pointer-events-auto"
        />
      </PopoverContent>
    </Popover>
  );
}
