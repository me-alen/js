const myForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

const items = [];

function handleSubmit(event) {
  event.preventDefault();

  const name = event.currentTarget.item.value;
  const item = {
    name: name,
    id: Date.now(),
    complted: false
  };

  items.push(item);

  event.target.reset();
  // displayItems();

  list.dispatchEvent(new CustomEvent("updated"));
}

function displayItems() {
  console.log("submitted");
  const html = items
    .map(
      item =>
        `<li class='shopping-item'>
      <input type="checkbox" />
      <span class="itemName">${item.name}</span>
      <button>&times</button>

      </li>`
    )
    .join("");
  list.innerHTML = html;
}

myForm.addEventListener("submit", handleSubmit);
list.addEventListener("updated", displayItems);
list.addEventListener("updated", event => {
  console.log(event);
});
