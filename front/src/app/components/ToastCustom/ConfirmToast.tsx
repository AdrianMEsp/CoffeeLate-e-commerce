import { toast } from "sonner";

const ConfirmToast = (message: string, onConfirm: () => void) => {
    toast.custom((t) => (
        <div className="bg-orangeFour text-white p-4 rounded-md shadow-lg w-72">
            <p className="mb-4 text-sm">{message}</p>
            <div className="flex justify-end gap-2">
                <button
                    onClick={() => toast.dismiss(t)}
                    className="px-3 py-1 rounded bg-gray-600 text-sm hover:bg-gray-700"
                >
                    Cancelar
                </button>
                <button
                    onClick={() => {
                        toast.dismiss(t);
                        onConfirm();
                    }}
                    className="px-3 py-1 rounded bg-orange-600 text-sm hover:bg-orange-700"
                >
                    Confirmar
                </button>
            </div>
        </div>
    ));
};

export default ConfirmToast;
