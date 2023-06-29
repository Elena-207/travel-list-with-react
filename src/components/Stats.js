import React from "react";

export default function Stats({ items }) {
  //early return when the array is empty
  if (!items.length)
    return (
      <p className="stats">
        <em>You can add items to your packing list! 😍 </em>
      </p>
    );

  //deriving state from items
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Your list is complete now!😃 "
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
