export function extractNICDetails(nic: string) {
  nic = nic.trim().toUpperCase();

  let year: number, dayText: string;

  // Match 10-digit old NIC (e.g., 901234567V)
  if (/^\d{9}[VX]$/.test(nic)) {
    year = 1900 + parseInt(nic.slice(0, 2));
    dayText = nic.slice(2, 5);
  }
  // Match 12-digit new NIC (e.g., 200012300123)
  else if (/^\d{12}$/.test(nic)) {
    year = parseInt(nic.slice(0, 4));
    dayText = nic.slice(4, 7);
  } else {
    return {
      isValid: false,
      error: "NIC format is invalid",
      dob: null,
      gender: null,
    };
  }

  let dayOfYear = parseInt(dayText);
  let gender = "Male";

  // Female offset
  if (dayOfYear > 500) {
    gender = "Female";
    dayOfYear -= 500;
  }

  // Check if dayOfYear is in valid range
  const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const maxDays = isLeap ? 366 : 365;

  if (dayOfYear < 1 || dayOfYear > maxDays) {
    return {
      isValid: false,
      error: "Invalid day of year in NIC",
      dob: null,
      gender: null,
    };
  }

  // Convert day of year to date
  const dobDate = new Date(year, 0);
  if (!isLeap) dayOfYear--;
  dobDate.setDate(dayOfYear);

  return {
    isValid: true,
    dob: dobDate.toLocaleDateString("en-CA"),
    gender,
    error: null,
  };
}
