---
title: Documenting a Sound File API for a Hypothetical Dating Site. 
date: 2022-10-19
description: "I am using this article to demonstrate my ability to write an API documentation. Using a demo API to showcase my skillset as an API documentation writer"
featuredImage: ./web.jpeg
---

# Introduction - Documenting an API Demo

In this article, we will be documenting an API for a new dating service for people who only care about how their dates sound, not how they look. 

The name of the company is SoundDate and is a hypothetical dating site - which was made up for the sole purpose of demonstrating how to document an API as part of the [Learn API Technical Writing 2: REST for Writers](https://www.udemy.com/course/learn-api-technical-writing-2-rest-for-writers/) course.

## Information to document the request for a user to upload a sound file

Here the user is expected to upload a sound file to their own profile and to get information on sound files for another user's profile.

## Uploading a Sound File to the current user's profile

### Information from the developer team 

Disclaimer: Do note that the API website for this documentation, isn't real. It is for demonstration purpose only.

1. The server address is https://api.sounddate.com 
2. The resource is /profile/sound
3. The method is POST
4. There are three headers:
   a. Bearer has the access token. Required.
   b.  Content-Type has the sound file format, which can be either `audio/mpeg` for mp3 files or `audio/x-wav` for wav files. Default is `audio/mpeg`.
   c. Accept has the response format, which can be `application/xml` or `application/json`. Default is JSON.
5. The POST body is the sound file. 
6. The second file must be 5 minutes or shorter.
7. The response hs two element: 
   a. id: An integer, which is the ID of the new sound file.
   b. length: A float, which is the length of the sound file, in seconds

### The Sound File upload API reference documentation

Documenting the sound file API reference documentation using thr information provided by the developers team from above.


#### URL
POST <https://api.sounddate.com/profile/sound>


#### Headers

| Header name      | Description             | Required | Notes|
| -----------    | -----------               |----------|------|
|  Bearer        | Access token              | Required |      |
|  Content-Type  | Sound file from the user  | Required | File can be audio/mpeg for mp3 or audio/x-wav for wav files. Default is audio/mpeg |
|  Accept       | The format of the returned data  |   Optional       |  Can be application/xml or application/json. The default is JSON    |


#### POST Body 

The POST body is the sound file, 

Note: The sound file should be 5 minutes or shorter.

### Sample Request

```JSON
POST https://api.sounddate.com/profile/sound

Bearer: {acces token}
Content-Type: audio/mpeg
Accept: {application/json}

{
    sound file
}
```

#### Response

NOTE: Sometimes this information will be in an objects section and this section will just link it.

| Element      | Description   |   Type  |    Notes | 
| -----------    | ----------- | ------- |----------|
|   id         | ID of the new sound file| integer |          |   
|   length     |  sound file length  |    float     |    length is in seconds      |      

## Retrieving a sound file from another user

### Information from the developer team

1. The server address is <https://api.sounddate.com>
2. The resource is /user/{user id}/profile/sound
3. The method is GET
4. There are two headers:
   a. Bearer has the access token. Required.
   b. Accept has the response format, which can be application/xml or application/json. Default is JSON.
5. There is one query parameter called sortOrder. This determines the order that the sound files are returned. It has four possible values:
   a. mostRecent, sorts most recent to earliest
   b. earliest, sorts earliest to most recent
   c. shortest, sorts shortest to longest
   d. longest, sorts longest to shortest.
6. The sortOrder parameter is optional. The default is mostRecent.

### The sound file retrieval API reference documentation

Retrieving a user's uploaded sound file.

#### URL
GET `https://api.sounddate.com/user/{user id}/profile/sound`

where {user id} is the id of the user that has the sound file.

#### Headers

| Header name      | Description             | Required | Notes|
| -----------    | -----------               |----------|------|
|  Bearer        | Access token              | Required |      | |
|  Accept       | The format of the returned data  |    Optional      |  Can be application/xml or application/json. The default is JSON    |

#### Query Parameters

| Parameter      | Description | Type | Required | Notes|
| -----------    | ----------- | ------- |----------|------|
|  sortOrder     | Order in which sound files are returned            |       String  |    Optional      |  Has four possible values - `mostRecent`, `earliest`, `shortest`, `longest`. Default is `mostRecent`.    |

NOTE: 
`mostRecent` sorts most recent to `earliest`.
`earliest` sorts earliest to most recent.
`shortest` sorts shortest to `longest`.
`longest` sorts longest to `shortest`.

#### Sample Response
```JSON
{
    "soundFiles": [
        {
            "id": 65432,
            "url": "https://api.sounddate.com/profile/sound/65432.mp3",
            "length": 10.2
        },
        {
            "id": 23456,
            "url": "https://api.sounddate.com/profile/sound/23456.mp3",
            "length": 13.9
        }
    ]
}
```

#### Status Codes and Errors

The following table lists the returned HTTP status codes.

| Code        | Description |                          Notes |    
| ----------- | ----------- |                        ------- |
|    200      |       OK    |                    Successful  |          
|    401      |     Unauthorized |   Invalid access token      |          
|    413      |     Payload too large  | Uploaded sound file longer than 5 minutes         |      

