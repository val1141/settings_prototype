function saveSettings(id, removeCheckboxOnError) {
  const checkbox = document.getElementById(id);
  const status = document.getElementById(`operation-status-${id.split('-').pop()}`);

  if (!checkbox || !status) {
    console.error('Element not found');
    return;
  }

  // Simulate a network request with random success or failure
  const isSuccess = Math.random() >= 0.5;

  // Simulate a network request
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
  }, 1000); // Simulate a delay of 1 second
}

function saveSettingsWithType(id, removeCheckboxOnError) {
  const checkbox = document.getElementById(id);
  const status = document.getElementById(`operation-status-${id.split('-').pop()}`);

  if (!checkbox || !status) {
    console.error('Element not found');
    return;
  }

  // Determine the operation type based on checkbox state
  const isChecked = checkbox.checked;
  const isSuccess = Math.random() >= 0.5;
  let operationType;

  if (isChecked) {
    operationType = isSuccess ? 'Успешно включили' : 'Ошибка включения';
  } else {
    operationType = isSuccess ? 'Успешно выключили' : 'Ошибка выключения';
  }

  // Simulate a network request
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
  }, 1000); // Simulate a delay of 1 second
}
