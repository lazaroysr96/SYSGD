

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Havana', // o la zona horaria que necesites
  });
};

export const formatSimpleDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Havana', // o la zona horaria que necesites
  });
};

export const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

export const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "destructive";
      case "Media":
        return "default";
      case "Baja":
        return "secondary";
      default:
        return "default";
    }
  };

  