function saveSettings(id, removeCheckboxOnError) {
  const checkbox = document.getElementById(id);
  const status = document.getElementById(`operation-status-${id.split('-').pop()}`);

  if (!checkbox || !status) {
    console.error('Element not found');
    return;
  }

  // Show waiting message
  status.innerHTML = "<div class='waiting-message'>Ожидание применения</div>";

  // Simulate a network request with random success or failure after 2 seconds
  setTimeout(() => {
    const isSuccess = Math.random() >= 0.5;

    setTimeout(() => {
      if (isSuccess) {
        // Success: show success message
        status.innerHTML = "<div class='success-message'>Настройки успешно сохранены</div>";
      } else {
        // Error: show error message
        status.innerHTML = `<div class='error-message'>Ошибка: нет соединения с домофоном</div>`;
        if (removeCheckboxOnError) {
          checkbox.checked = false;
        }
      }
    }, 2000);
  }, 0);
}

function saveSettingsWithType(id, removeCheckboxOnError) {
  const checkbox = document.getElementById(id);
  const status = document.getElementById(`operation-status-${id.split('-').pop()}`);

  if (!checkbox || !status) {
    console.error('Element not found');
    return;
  }

  // Show waiting message
  status.innerHTML = "<div class='waiting-message'>Ожидание применения</div>";

  // Determine the operation type based on checkbox state
  const isChecked = checkbox.checked;

  // Simulate a network request with random success or failure after 2 seconds
  setTimeout(() => {
    const isSuccess = Math.random() >= 0.5;
    let operationType;

    if (isChecked) {
      operationType = isSuccess ? 'Успешно включили' : 'Ошибка включения';
    } else {
      operationType = isSuccess ? 'Успешно выключили' : 'Ошибка выключения';
    }

    setTimeout(() => {
      if (isSuccess) {
        // Success: show success message
        status.innerHTML = `<div class='success-message'>${operationType}</div>`;
      } else {
        // Error: show error message
        status.innerHTML = `<div class='error-message'>${operationType}</div>`;
        if (removeCheckboxOnError) {
          checkbox.checked = false;
        }
      }
    }, 2000);
  }, 0);
}
