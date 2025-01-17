﻿---
title: Google Cloud Credentials
hide_title: true
sidebar_position: 5
---

# Creating Google Cloud Credentials
To create secure credentials for Google Cloud Storage, perform the following.  You can also watch the embedded video, which walks through the process.​
- Create a Bucket
- Create credentials for write-only access to the bucket

<iframe width="100%" height="536" src="https://www.youtube.com/embed/VQxzJ1V8ArE" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

## Creating a Bucket
- Open the Storage Browser.
- Click Create Bucket.
- Create the bucket using your desired settings.

## Creating Credentials
- Go to Storage Settings.
- Select your project, then select Interoperability.
- Click Create a Key for a service Account.
- Click Create a New Account.
- Type the name of the account, then grant the Storage Object Creator permission.
- This grants permission to write objects to a storage bucket, but not list or download objects.
- Click through to create the account, and copy the Secret Key and Access Key.

In the end, you are ready to go when you have:
1. The Access Key
2. The Secret Key
3. The Bucket Name