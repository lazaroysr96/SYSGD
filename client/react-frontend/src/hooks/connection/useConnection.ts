const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

type useConnectionReturnType = {
	handleNewArchiving: (
		code: string,
		company: string,
		name: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;

	handleAddClassificationBoxData: (
		id: string,
		data: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;

	handleNewDocumentEntry: (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;

	handleNewDocumentExit: (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;

	handleNewDocumentLoan: (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;

	handleNewTopographicRegister: (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;

	handleNewRetentionSchedule: (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => Promise<void>;
};

const useConnection = (): useConnectionReturnType => {
	const handleNewArchiving = async (
		code: string,
		company: string,
		name: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/create`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ code, company, name }),
			});
			if (res.ok) onSuccess();
			else {
				const text = await res.text();
				alert(text);
				onFail();
			}
		} catch {
			onFail();
		}
	};

	const handleAddClassificationBoxData = async (
		id: string,
		data: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/add_classification_data`, {
				method: "POST", // 👈 Cambiar PUT por POST
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ id, data }), // 👈 Enviar ambos en el body
			});

			if (res.ok) onSuccess();
			else {
				const text = await res.text();
				console.error(text);
				onFail();
			}
		} catch (e) {
			console.error("Error al guardar:", e);
			onFail();
		}
	};

	const handleNewDocumentEntry = async (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/add-document-entry`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ data, id }),
			});

			if (res.ok) onSuccess();
			else {
				const text = await res.text();
				console.error(text);
				onFail();
			}
		} catch (e) {
			console.error("Error al guardar el registro:", e);
			onFail();
		}
	};

	const handleNewDocumentExit = async (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/add-document-exit`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ data, id }),
			});

			if (res.ok) onSuccess();
			else {
				const text = await res.text();
				console.error(text);
				onFail();
			}
		} catch (e) {
			console.error("Error al guardar el registro:", e);
			onFail();
		}
	};

	const handleNewDocumentLoan = async (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/add-document-loan`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ data, id }),
			});

			if (res.ok) onSuccess();
			else {
				const text = await res.text();
				console.error(text);
				onFail();
			}
		} catch (e) {
			console.error("Error al guardar el préstamo:", e);
			onFail();
		}
	};

	const handleNewTopographicRegister = async (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/add-document-topographic`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ data, id }),
			});

			if (res.ok) onSuccess();
			else {
				const text = await res.text();
				console.error(text);
				onFail();
			}
		} catch (e) {
			console.error("Error al guardar topográfico:", e);
			onFail();
		}
	};

	const handleNewRetentionSchedule = async (
		data: string,
		id: string,
		onSuccess: () => void,
		onFail: () => void,
	) => {
		try {
			const res = await fetch(`${serverUrl}/api/add-retention-schedule`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ data, id }),
			});
			if (res.ok) onSuccess();
			else onFail();
		} catch (e) {
			onFail();
		}
	};

	return {
		handleNewArchiving,
		handleAddClassificationBoxData,
		handleNewDocumentEntry,
		handleNewDocumentExit,
		handleNewDocumentLoan,
		handleNewTopographicRegister,
		handleNewRetentionSchedule,
	};
};

export default useConnection;
