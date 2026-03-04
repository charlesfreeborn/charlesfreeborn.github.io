---
title: "Documenting a Sound File API for a Hypothetical Dating Site"
date: "2022-10-19"
excerpt: "Demonstrating API documentation skills using a demo API — structure, endpoints, and writing for a developer audience."
category: "docs"
---

Technical writing is a skill I care about deeply. One specific area I find fascinating is **API documentation** — the art of explaining a developer interface clearly enough that someone can use it without ever talking to you.

In this post, I'm going to walk through how I'd document a fictional audio API for a hypothetical dating application. The goal is to demonstrate the craft, not build an actual product.

---

## The Scenario

Imagine a dating app called *Voicematch* that lets users send short voice notes as icebreakers. The backend exposes a REST API for uploading, retrieving, and deleting audio files.

---

## API Overview

**Base URL:** `https://api.voicematch.com/v1`

**Authentication:** All endpoints require a bearer token in the `Authorization` header:
```
Authorization: Bearer <your_api_token>
```

**Response format:** All responses return JSON.

---

## Endpoints

### Upload a Sound File

**`POST /audio`**

Uploads an audio file for a user profile.

**Request**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `file` | `file` | Yes | The audio file. Accepted formats: `.mp3`, `.m4a`, `.ogg`. Max size: 5MB. |
| `user_id` | `string` | Yes | The ID of the user uploading the file. |
| `duration_seconds` | `integer` | No | Duration of the audio clip. Must be ≤ 30 seconds. |

**Example request (cURL):**
```bash
curl -X POST https://api.voicematch.com/v1/audio \
  -H "Authorization: Bearer your_token" \
  -F "file=@voice_intro.mp3" \
  -F "user_id=usr_abc123"
```

**Example response:**
```json
{
  "id": "audio_xyz789",
  "user_id": "usr_abc123",
  "url": "https://cdn.voicematch.com/audio/audio_xyz789.mp3",
  "duration_seconds": 18,
  "created_at": "2022-10-19T10:32:00Z"
}
```

---

### Retrieve a Sound File

**`GET /audio/{id}`**

Returns metadata and a streaming URL for a specific audio file.

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique ID of the audio file. |

**Example response:**
```json
{
  "id": "audio_xyz789",
  "user_id": "usr_abc123",
  "url": "https://cdn.voicematch.com/audio/audio_xyz789.mp3",
  "duration_seconds": 18,
  "created_at": "2022-10-19T10:32:00Z"
}
```

---

### Delete a Sound File

**`DELETE /audio/{id}`**

Permanently deletes an audio file. Only the owning user can delete their file.

**Example request:**
```bash
curl -X DELETE https://api.voicematch.com/v1/audio/audio_xyz789 \
  -H "Authorization: Bearer your_token"
```

**Example response:**
```json
{
  "deleted": true,
  "id": "audio_xyz789"
}
```

---

## Error Codes

| Status Code | Meaning |
|---|---|
| `400 Bad Request` | Missing or invalid parameters |
| `401 Unauthorized` | Invalid or missing API token |
| `403 Forbidden` | You don't have permission for this resource |
| `404 Not Found` | Audio file doesn't exist |
| `413 Payload Too Large` | File exceeds the 5MB limit |
| `500 Internal Server Error` | Something went wrong on our end |

---

## Notes on Good API Documentation

A few principles I tried to apply here:

- **Show examples for everything.** Developers learn by example. Show the request, show the response.
- **Be explicit about constraints.** Max file size, accepted formats, max duration — all stated upfront.
- **Error codes with explanations.** Don't just list the codes; say what each one means in context.
- **Consistent structure.** Every endpoint follows the same pattern: description → parameters → example request → example response.

Good API docs reduce support burden and improve developer experience. They're a direct reflection of how much you respect the developer's time.
