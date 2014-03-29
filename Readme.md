[Logic stuff](gist.github.com/helloluis/9846306) from Helloluis/Luis (lemniscate#6608). Blame him if it can't pull data anymore.

### Contribute (like maybe, prettify the thing)

Get started : 

- Fork
- Pull
- run bundle

To start the middleman server run

    bundle exec middleman
    
Then navigate to localhost:4567

To change stuff, change things inside the `source` directory, not the `build` directory.

To build and deploy the github page, run 

    git push && rake build && rake publish

Then point your browser to `http://<your-github-username>.github.io/helloluis-herocount` to see it in action.

