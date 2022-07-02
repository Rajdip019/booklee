# How to setup Booklee in your local system?

Here are the exact steps you need to follow to run booklee in your local system!

## 1. Clone Repo or Download Files

So, first of all you need to do is clone the [Rajdip019/booklee](https://github.com/Rajdip019/booklee) GitHub repository or you can also download the files.

If you don't know how to clone or where to download the code the watch this video.

[How to Clone a GitHub Repo](https://www.youtube.com/watch?v=CKcqniGu3tA)
[Blog on the same topic, official GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Or you can run this code in your PC/Laptop terminal 

```
git clone https://github.com/Rajdip019/booklee.git

```

## 2. Installing all npm packages

Then you need to navigate to the directory and run the following code. This will install all the dependencies you need.

```
npm install

```
## 3. Setup helper

Before setting up any API keys you need to change the helper, so that it makes request to your localhost.

Go to <mark >./helpers/template.js</mark> .

Remove everything and copy paste this code snippet.

```
export const template = {
    templateString : "http://localhost:3000"
}

```

**Note** : You can have different localhost other than 3000, use that in that case. 

## Setting up API Keys.

This is the most important part. There are Authentication, Database, Filter & search and Map APIs that you need to setup. Let's go through all of them one by one.

Before jumping in just rename your <mark>**.env.example** file to **.env.local**</mark>

## Authentication API Keys

Here we have used <mark>next-auth</mark> for authentication. 

We have three different authentication options.

- Google
- Twitter
- GitHub

Now for Google you first need to create OAuth credentials. Watch the video mentioned below.

[How to create Google OAuth Credentials (Client ID and Secret)](https://www.youtube.com/watch?v=xH6hAW3EqLk).

After you get the keys you need to setup the **google client ID** and **google client secret** in the **.env.local** file.

For Twitter watch this video.

[How to Get Twitter API Key 🔑 and Secret Key](https://www.youtube.com/watch?v=gLZE1L8UfqA)

After you get the keys you need to setup the **twitter client ID** and **twitter client secret** in the **.env.local** file.\

For GitHub watch this video.

[How to create GitHub OAuth App (client ID and client secret)](https://www.youtube.com/watch?v=R9lxXQcy-nM)

After you get the keys you need to setup the **GitHub client ID** and **GitHub client secret** in the **.env.local** file.

With that's done you are done with the authentication part.

## Database API

We are using Cosmos DB from Microsoft Azure Cloud. If you want to have a database and access that you can watch my this video of Azure Cosmos DB International Conf.

[Mkae your Database and Integrate that.](https://youtu.be/GiMtIifnsLk?t=7240)

## Searh and filter API

You can watch this for **Search and Filter** API

[Azure Cognitive Search Service](https://www.youtube.com/watch?v=_qxV6QLxeeA)

## Next auth Secret 

For hosting or in a production environment you must need a Next Auth secret let's see how we can get one.

**Not providing any secret or NEXTAUTH_SECRET will throw an error in production.**

Use this code in your terminal to generate a key for you.

```
$ openssl rand -base64 32

```

Copy that key and paste it beside **SECRET** keyword in the **.env.local** file. (You renamed).

You also need to out this in your **.env.local**.

Because, when deploying to production, set the NEXTAUTH_URL environment variable to the canonical URL of your site.

```
NEXTAUTH_URL=https://example.com

```

It maybe your localhost URL or maybe the URL where you want to deploy.

## Shortcut

If you want to contribute here and dont't want to set all this up to get started. The you can shoot me a mail with your GitHub profile URL and where you want to contribute. After reviewing I will send you the credentials.

**Never push ceredetials to GitHub**

## Pushing changes or making changes

For pushing your updates make a new branch in thsi format.

**(your_name)/(functionality_name)**

And also describe a bit what changes made and try to attach screenshots.

## Having problem?

If you face any problem you can mail me at **rajdipgupta019@gmail.com**. Or DM me on LinkedIn.

[LinkedIn](https://www.linkedin.com/in/rajdeep-sengupta/)