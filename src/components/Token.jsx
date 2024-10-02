import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({address="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token position-relative z-1 d-flex align-items-center mx-auto">
            <p><span>CA:</span> {token}</p>
            <button onClick={() => copyHandle()} className="p-0 d-flex align-items-center justify-content-center">
                {copied ? <LuCopyCheck/> : <LuCopy />}
            </button>
        </div>
    )
}
