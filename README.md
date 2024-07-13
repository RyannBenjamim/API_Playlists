# Playlist Management API

Esta API foi desenvolvida para facilitar o gerenciamento de playlists, músicas e tags de maneira eficiente. Utilizando o framework Express, esta API oferece um conjunto de endpoints que permitem a criação, leitura, atualização e exclusão de playlists e suas músicas associadas, e também a adição e gerenciamento de tags.
## Tecnologias Utilizadas

- **Express** - Para criação da API e gerenciamento das requisições.

## Endpoints

### Playlists

- `GET /playlists`
  - Descrição: Retorna todas as playlists.
  - Exemplo de Resposta:
    ```json
    {
      "data": [
          {
              "id": "1",
              "name": "Playlist",
              "tags": [],
              "musics": [],
              "createdAt": "2024-07-13T15:20:34.611Z",
              "updatedAt": "2024-07-13T15:20:34.611Z"
          }
      ]
    }
    ```

- `GET /playlists/:id`
  - Descrição: Retorna uma playlist específica pelo ID.
  - Parâmetros: `id` (ID da playlist)
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "id": "1",
          "name": "Playlist",
          "tags": [],
          "musics": [],
          "createdAt": "2024-07-13T15:20:34.611Z",
          "updatedAt": "2024-07-13T15:20:34.611Z"
      }
    }
    ```

- `POST /playlists`
  - Descrição: Cria uma nova playlist.
  - Parâmetros (body):
    ```json
    {
      "name": "New Playlist",
      "musics": [],
      "tags": []
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "id": "2",
          "name": "New Playlist",
          "tags": [],
          "musics": [],
          "createdAt": "2024-07-13T15:24:05.717Z",
          "updatedAt": "2024-07-13T15:24:05.717Z"
      }
    }
    ```

- `PUT /playlists/:id`
  - Descrição: Atualiza uma playlist existente.
  - Parâmetros: `id` (ID da playlist)
  - Parâmetros (body):
    ```json
    {
      "name": "Updated Playlist",
      "musics": [],
      "tags": []
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "id": "2",
          "name": "Updated Playlist",
          "tags": [],
          "musics": [],
          "createdAt": "2024-07-13T15:24:05.717Z",
          "updatedAt": "2024-07-13T15:26:13.154Z"
      }
    }
    ```

- `PATCH /playlists/:id/name`
  - Descrição: Atualiza apenas o nome de uma playlist.
  - Parâmetros: `id` (ID da playlist)
  - Parâmetros (body):
    ```json
    {
      "name": "Renamed Playlist"
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "id": "2",
          "name": "Renamed Playlist",
          "tags": [],
          "musics": [],
          "createdAt": "2024-07-13T15:24:05.717Z",
          "updatedAt": "2024-07-13T15:28:17.961Z"
      }
    }
    ```

- `DELETE /playlists/:id`
  - Descrição: Deleta uma playlist pelo ID.
  - Parâmetros: `id` (ID da playlist)
  - Exemplo de Resposta:
    ```json
    {
      "message": "Playlist deletada com sucesso."
    }
    ```

### Músicas

- `GET /playlists/:id/musics`
  - Descrição: Retorna todas as músicas de uma playlist.
  - Parâmetros: `id` (ID da playlist)
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "playlist": "Playlist",
          "musics": [
              {
                  "id": "1",
                  "title": "Music name",
                  "year": 2024,
                  "artist": "Artist name",
                  "album": "Album name",
                  "createdAt": "2024-07-13T15:32:36.256Z",
                  "updatedAt": "2024-07-13T15:32:36.256Z"
              }
          ]
      }
    }
    ```

- `GET /playlists/:id/musics/:idmusic`
  - Descrição: Retorna uma música específica de uma playlist.
  - Parâmetros: `id` (ID da playlist), `idmusic` (ID da música)
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "playlist": "Playlist",
          "music": {
              "id": "1",
              "title": "Music name",
              "year": 2024,
              "artist": "Artist name",
              "album": "Album name",
              "createdAt": "2024-07-13T15:32:36.256Z",
              "updatedAt": "2024-07-13T15:32:36.256Z"
          }
      }
    }
    ```

- `POST /playlists/:id/musics`
  - Descrição: Adiciona uma nova música a uma playlist.
  - Parâmetros: `id` (ID da playlist)
  - Parâmetros (body):
    ```json
    {
      "title": "Music name",
      "year": 2024,
      "artist": "Artist name",
      "album": "Album name"
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "playlist": "Playlist",
          "musics": [
              {
                  "id": "1",
                  "title": "Music name",
                  "year": 2024,
                  "artist": "Artist name",
                  "album": "Album name",
                  "createdAt": "2024-07-13T15:37:45.314Z",
                  "updatedAt": "2024-07-13T15:37:45.314Z"
              }
          ]
      }
    }
    ```

- `PUT /playlists/:id/musics/:idmusic`
  - Descrição: Atualiza uma música existente em uma playlist.
  - Parâmetros: `id` (ID da playlist), `idmusic` (ID da música)
  - Parâmetros (body):
    ```json
    {
      "title": "Music Updated name",
      "year": 2024,
      "artist": "Artist Updated name",
      "album": "Album updated name"
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "playlist": "Playlist",
          "music": {
              "id": "1",
              "title": "Music Updated name",
              "year": 2024,
              "artist": "Artist Updated name",
              "album": "Album updated name",
              "createdAt": "2024-07-13T15:45:56.782Z",
              "updatedAt": "2024-07-13T15:46:36.784Z"
          }
      }
    }
    ```

- `DELETE /playlists/:id/musics/:idmusic`
  - Descrição: Deleta uma música específica de uma playlist.
  - Parâmetros: `id` (ID da playlist), `idmusic` (ID da música)
  - Exemplo de Resposta:
    ```json
    {
      "message": "Música deletada com sucesso."
    }
    ```

### Tags

- `POST /playlists/:id/tags`
  - Descrição: Adiciona uma nova tag a uma playlist.
  - Parâmetros: `id` (ID da playlist)
  - Parâmetros (body):
    ```json
    {
      "tag": "New tag"
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "playlist": "Playlist",
          "tags": [
              "New tag"
          ]
      }
    }
    ```

- `PUT /playlists/:id/tags`
  - Descrição: Atualiza as tags de uma playlist.
  - Parâmetros: `id` (ID da playlist)
  - Parâmetros (body):
    ```json
    {
      "tags": ["new", "tags", "array"]
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
      "data": {
          "playlist": "Playlist",
          "tags": [
              "new",
              "tags",
              "array"
          ]
      }
    }
    ```

- `DELETE /playlists/:id/tags`
  - Descrição: Deleta todas as tags de uma playlist.
  - Parâmetros: `id` (ID da playlist)
  - Exemplo de Resposta:
    ```json
    {
      "message": "Tag deletada com sucesso."
    }
    ```

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

### Passos para execução

1. Clone este repositório:

```env
git clone https://github.com/RyannBenjamim/ToDo-List-Express
```

2. Instale as dependências:

```env
npm install
```

3. Inicie o servidor:

```env
npm run dev
```

## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato com Ryan Costa Benjamim via [meu site](https://ryancostaportfolio.netlify.app/)

Espero que este README ajude você a entender melhor o projeto! Sinta-se à vontade para personalizá-lo de acordo com suas necessidades e informações específicas.
