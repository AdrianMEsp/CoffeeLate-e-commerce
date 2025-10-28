export default function SubmitButton({ text="enviar", disabled=false}) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`
        p-3 w-35 border rounded bg-linear-to-r
         from-orangeThree to-blackPrimary text-center
         hover:brightness-200
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
        >
            {text}
        </button>
    );
}


