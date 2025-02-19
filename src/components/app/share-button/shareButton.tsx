"use client";

import { useState, useEffect } from "react";

interface ShareButtonProps {
  open?: boolean;
  setOpen?: () => void;
  children?: React.ReactNode;
}

export default function ShareButton({ open, setOpen, children }: ShareButtonProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const shareOptions = [
    { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${url}`, color: "text-blue-600" },
    { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${url}`, color: "text-sky-500" },
    { name: "LinkedIn", url: `https://www.linkedin.com/shareArticle?url=${url}`, color: "text-blue-700" },
    { name: "Email", url: `mailto:?subject=Veja isso!&body=${url}`, color: "text-gray-500" },
    { name: "WhatsApp", url: `https://wa.me/?text=${url}`, color: "text-green-500" },
  ];

  return (
    <div className="relative inline-block">
      <div onClick={setOpen} className="cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-lg bg-white shadow-md hover:bg-gray-100">
        {children}
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 hover:bg-gray-100 ${option.color}`}
            >
              <span className="mr-2">•</span> {option.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
  