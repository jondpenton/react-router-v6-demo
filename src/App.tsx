import React from 'react'
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<InvoiceList />} />
              <Route path=":invoiceID" element={<Invoice />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

function Root() {
  return (
    <React.Fragment>
      <Link to=".">
        <h1>React Router v6 Demo</h1>
      </Link>
      <Link to="invoices">Go to Invoices</Link>

      <Outlet />
    </React.Fragment>
  )
}

function Invoices() {
  return (
    <section style={{ marginTop: `2rem` }}>
      <h2>Invoices</h2>

      <Outlet />
    </section>
  )
}

function InvoiceList() {
  return (
    <ul>
      {[...Array(6)].map((_, index) => (
        <li key={index}>
          <Link to={index.toString()}>Invoice {index}</Link>
        </li>
      ))}
    </ul>
  )
}

function Invoice() {
  const { invoiceID } = useParams()

  return (
    <section style={{ marginTop: `2rem` }}>
      <h3>Invoice {invoiceID}</h3>
      <p>You owe $1,000,000! :O</p>
      <Link to="..">Go Back</Link>
    </section>
  )
}
