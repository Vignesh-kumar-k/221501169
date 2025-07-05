# React URL Shortener Web App

A lightweight, user-friendly client-side URL shortener built with React and Material UI. The application allows users to shorten URLs, set custom shortcodes, define expiration time, and view analytics — all while integrating a reusable logging middleware to track actions and improve observability.

---

## Project Overview

This application was developed as part of an evaluation exercise by [AffordMed Technologies](https://affordmed.com). It meets all the functional and technical requirements specified, including:

- URL shortening with optional custom shortcodes.
- Expiry time configuration (default: 30 minutes).
- Real-time redirection and statistics page.
- Fully client-side state handling using `localStorage`.
- Centralized logging using a custom **Logging Middleware**.

---

## Tech Stack

- **Frontend**: React (CRA)
- **UI Framework**: Material UI
- **Middleware**: Custom-built logger using Fetch API
- **Routing**: React Router
- **State Persistence**: Local Storage

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener-affordmed.git
cd url-shortener-affordmed
cd frontend
npm install @mui/material @emotion/react @emotion/styled uuid
npm start
