    //1) Создать некий счетчик. В HTML две кнопки (increment, decrement) или ("-", "+") и отобразить в HTML переменную
    // внутри которой 0. При нажатии на эти кнопки должно меняться значение +1 или -1 при нажатии на соответствующую
    // кнопку. При нажатии на плюс отображаемая цифра должна менять цвет на зеленый, а при нажатии на минус в красный.
    // Нельзя уменьшать значение ниже нуля.

    let count = 0;
    const counter = document.getElementById("counter");

    document.getElementById("increment").addEventListener("click", () => {
      count++;
      counter.textContent = count;
      counter.style.color = "green";
    });

    document.getElementById("decrement").addEventListener("click", () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
      counter.style.color = "red";
    });

//2) Создать блок 500 на 500 с бордером и отобразить внутри в тексте x: y:
    // соответствующие координаты при движении мыши внутри этого блока.

    const box = document.getElementById("box");
    const coordinates = document.getElementById("coordinates");

    box.addEventListener("mousemove", (event) => {
  const rect = box.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);

  coordinates.textContent = `x: ${x}, y: ${y}`;
});


    //3) Создайте input в HTML, куда пользователь может вводить название цвета (red, blue, green и т. д.).
    // При вводе цвета (в input), фон страницы должен менять цвет в реальном времени когда инпут меняется.
    const colorInput = document.getElementById("colorInput");
    colorInput.addEventListener("input", () => {
      const color = colorInput.value.trim();

      if (CSS.supports("color", color)) {
        document.body.style.backgroundColor = color;
      }
    });