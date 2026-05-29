import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

const vinculacion = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
      {
        index: true,
        lazy: async () => {
        return {Component: (await import('./assets/pages/inicio.tsx')).default}
        }
      },
      {
        path: "Tendencias",
        lazy: async () => ({ Component: (await import('./assets/Tendenciaycolecciones/index.tsx')).default}
      )
      },
      {
        path: "Ropas",
        lazy: async () => ({ Component: (await import('./assets/Ropa/index.tsx')).default}
      )
    },
    {
        path: "Zapatos",
        lazy: async () => ({ Component: (await import('./assets/pages/Zapatos.tsx')).default}
      )
    },
    {
        path: "Accesorios",
        lazy: async () => ({ Component: (await import('./assets/pages/Accesorios.tsx')).default}
      )
    },
    {
      path: "Camisetas",
        lazy: async () => ({ Component: (await import('./assets/pages/camisetas.tsx')).default}
      )
    },

    {
      path: "AccesorioDeportivo",
        lazy: async () => ({ Component: (await import('./assets/pages/AceesorioDeportivo.tsx')).default}
      )
    },
    {
      path: "Fitness",
        lazy: async () => ({ Component: (await import('./assets/pages/Fitness.tsx')).default}
      )
    },
    {
      path: "Bicicletas",
        lazy: async () => ({ Component: (await import('./assets/pages/Bicicletas.tsx')).default}
      )
    },
    {
      path: "Promociones",
        lazy: async () => ({ Component: (await import('./assets/pages/promociones.tsx')).default}
      )
    },
    {
      path: "*",
        lazy: async () => ({ Component: (await import('./assets/pages/Pagina404.tsx')).default}
      )
    },
    {
      path: "productodetalle",
        lazy: async () => ({ Component: (await import('./assets/pages/RopaDetalle/index.tsx')).default}
      )
    },
    {
      path: "detalletendencia/:idtendenciayC",
        lazy: async () => ({ Component: (await import('./assets/pages/productoDetalles/indexTendencia.tsx')).default}
      )
    }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router = {vinculacion} />
    <ReactQueryDevtools initialIsOpen= {false}/>
    </QueryClientProvider>
  </StrictMode>,
)