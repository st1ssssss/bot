# bot

object to be recieved from user that sent message:
{
  message_id: ID_СООБЩЕНИЯ,
  from: {
    id: ID_ПОЛЬЗОВАТЕЛЯ,
    is_bot: false,
    first_name: ИМЯ_ПОЛЬЗОВАТЕЛЯ,
    username: НИК_ПОЛЬЗОВАТЕЛЯ,
    language_code: 'ru'
  },
  chat: {
    id: ID_ЧАТА,
    first_name: ИМЯ_ПОЛЬЗОВАТЕЛЯ,
    username: НИК_ПОЛЬЗОВАТЕЛЯ,
    type: 'private'
  },
  date: 1686255759,
  text: ТЕКСТ_СООБЩЕНИЯ,
}