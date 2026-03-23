# Add a Custom Domain

Instead of `yourname.github.io`, you can point your own domain (like `mysite.com`) at your GitHub Pages site. You get free hosting with a professional URL. You'll need to own a domain from a registrar like Namecheap, Google Domains, or Cloudflare.

## How to do it

1. Go to your repo's **Settings** > **Pages**
2. Under **Custom domain**, type your domain name and click **Save**
3. Log in to your domain registrar
4. Add a **CNAME** record pointing to `yourname.github.io`
5. Wait for DNS to propagate (can take a few minutes to a few hours)
6. Back in GitHub Pages settings, check **Enforce HTTPS**

## Try it

```
In your domain registrar's DNS settings, add:

Type: CNAME
Name: www
Value: yourname.github.io

Then in your repo, create a file called CNAME with just your domain:
www.mysite.com
```

## Resources

- [Custom domains for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Tips

- If you want the bare domain (`mysite.com` without `www`), you'll need to set up A records pointing to GitHub's IP addresses instead of a CNAME. GitHub's docs list the current IPs.
- Always enable HTTPS. It's free and automatic with GitHub Pages.
- DNS changes can take up to 24 hours to fully propagate, but usually it's much faster.
