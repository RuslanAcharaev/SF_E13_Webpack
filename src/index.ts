import './style.css';

function component(text: string) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack!!'));


// Определение интерфейса для контакта
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// URL JSON-сервера
const BASE_URL = 'http://localhost:3000/contacts';

// Функция для получения списка всех контактов
async function getAllContacts(): Promise<Contact[]> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data: Contact[] = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении всех контактов:', error);
    throw error;
  }
}

// Функция для получения контакта по ID
async function getContactById(id: number): Promise<Contact | null> {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data: Contact = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении контакта с ID ${id}:`, error);
    return null;
  }
}


(async () => {
  try {
    const contacts = await getAllContacts();
    console.log('Список всех контактов:', contacts);

    const contact = await getContactById(1); // Заменить на нужный ID
    console.log('Контакт с ID 1:', contact); // Заменить на нужный ID
  } catch (error) {
    console.error('Ошибка в процессе выполнения:', error);
  }
})();
