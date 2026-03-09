
export const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
        
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;

    if (!name?.trim()) {
        newErrors.name = "Full name is required";
    }
        
    if (!phone?.trim()) {
        newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
        newErrors.phone = "Please enter a valid phone number";
    }

    if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
};