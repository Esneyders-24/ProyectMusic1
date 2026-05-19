import { version } from "react";

export const CONFIG = {
    API_URL: import.meta.env.VITE_API_BASE_URL,
    ENV: import.meta.env.VITE_ENVIRONMENT,

    ENDPOINTS:{
        TENDENCIASYCOLECCIONES: '/tendencias_colecciones.php'  
    },

    version: '1.0.0'
} as const