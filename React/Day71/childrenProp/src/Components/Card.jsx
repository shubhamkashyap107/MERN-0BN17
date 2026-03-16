import React from 'react'

const Card = ({ src, name, price }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "200px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <img
        src={src}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "6px"
        }}
      />

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2
          style={{
            fontSize: "16px",
            margin: 0
          }}
        >
          {name}
        </h2>

        <span
          style={{
            color: "green",
            fontWeight: "bold"
          }}
        >
          $ {price}
        </span>
      </div>
    </div>
  )
}

export default Card