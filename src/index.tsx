import {createRoot} from 'react-dom/client';
import {App} from "@/components/App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LazyAbout } from '@/pages/About/About.lazy';
import { Shop } from '@/pages/Shop';
import { Suspense } from 'react';

const root = document.getElementById("root");

if(!root) {
    throw new Error('root not found');
};

const container = createRoot(root);

container.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route path='/shop' element={<Suspense fallback="loading..."><Shop/></Suspense>}/>
            <Route path='/about' element={<Suspense fallback="loading..."><LazyAbout/></Suspense>}/>
        </Route>
    </Routes>
</BrowserRouter>
)