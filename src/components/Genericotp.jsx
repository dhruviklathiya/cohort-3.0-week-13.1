import { useRef, useState } from 'react';

export default function Genericotp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        const prevInput = inputRefs.current[index - 1];

        if (e.key === 'Backspace' && e.target.value === '' && prevInput) {
            prevInput.focus();
        }

        const isDigit = /^[0-9]$/.test(e.key);
        const isControlKey = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key);

        if (!isDigit && !isControlKey) {
            e.preventDefault();
        }
    };

    return (
        <div className="w-full flex justify-center mt-4">
            {otp.map((value, index) => (
                <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    className="bg-[#163c69] h-16 w-[34px] text-white rounded-lg mr-3 outline-none p-[12px] text-center text-xl"
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
        </div>
    );
}
