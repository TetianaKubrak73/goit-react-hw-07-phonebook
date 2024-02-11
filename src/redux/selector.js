import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts.items;

export const selectFilter = store => store.filter;
// Получение отфильтрованных контактов
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    // Добавляем проверку на существование и тип контактов
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
