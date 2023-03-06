import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    const routes = Object.values(routeConfig).map(({path,element})=>(
        <Route key={path} path={path} element={element}/>
    ))

    return(
        <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                {routes}
            </Routes>
        </Suspense>
    )
}

export default AppRouter