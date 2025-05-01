import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

// Importando as interfaces
import { SignIn } from './interfaces/SignIn';
import { SignUp } from './interfaces/SignUp';
import { Home } from './interfaces/Home';
import { CreateMovie } from './interfaces/CreateMovie';
import { MoviePreview } from './interfaces/MoviePreview';
import { Profile } from './interfaces/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-movie" element={<CreateMovie />} />
          <Route path="/movie-preview/:id" element={<MoviePreview />} /> {/* Suporte ao ID do filme */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);