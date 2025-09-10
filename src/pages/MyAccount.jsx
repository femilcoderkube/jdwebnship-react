import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";

const menuItems = [
  { key: "orders", label: "Orders" },
  { key: "wishlist", label: "Wishlist" },
  { key: "address", label: "Address" },
  { key: "password", label: "Password" },
  { key: "account", label: "Account Details" },
  { key: "logout", label: "Logout" },
];

const renderContent = (selected) => {
  switch (selected) {
    case "orders":
      return (
        <div>
          <h2>Orders</h2>
          <p>Your order history will appear here.</p>
        </div>
      );
    case "wishlist":
      return (
        <div>
          <h2>Wishlist</h2>
          <p>Your wishlist items will appear here.</p>
        </div>
      );
    case "address":
      return (
        <div>
          <h2>Address</h2>
          <p>Your saved addresses will appear here.</p>
        </div>
      );
    case "password":
      return (
        <div>
          <h2>Password</h2>
          <p>Update your password here.</p>
        </div>
      );
    case "account":
      return (
        <div>
          <h2>Account Details</h2>
          <p>Update your account details here.</p>
        </div>
      );
    case "logout":
      return (
        <div>
          <h2>Logout</h2>
          <p>You have been logged out.</p>
        </div>
      );
    default:
      return (
        <div>
          <h2>Welcome</h2>
          <p>Select an option from the menu.</p>
        </div>
      );
  }
};

const MyAccount = () => {
  const [selected, setSelected] = useState("orders");

  return (
    <div>
      <CommonHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "60vh",
          maxWidth: 1000,
          margin: "32px auto",
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          overflow: "hidden",
        }}
      >
        {/* Left Navigation */}
        <nav
          style={{
            minWidth: 200,
            background: "#f7f7f7",
            borderRight: "1px solid #eee",
            padding: "24px 0",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setSelected(item.key)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "12px 24px",
                    background:
                      selected === item.key ? "#e0e7ff" : "transparent",
                    border: "none",
                    textAlign: "left",
                    fontWeight: selected === item.key ? 600 : 400,
                    color: selected === item.key ? "#1d4ed8" : "#222",
                    cursor: "pointer",
                    outline: "none",
                    transition: "background 0.2s",
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Right Content */}
        <section style={{ flex: 1, padding: "32px 24px" }}>
          {renderContent(selected)}
        </section>
      </div>
    </div>
  );
};

export default MyAccount;
