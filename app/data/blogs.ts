export const blogs = [
  {
    slug: "axios-backdoored-two-hours-hackers-full-control",
    title: "Axios Was Backdoored for Two Hours",
    desc: "What actually happened and why it matters.",
    date: "APR 01, 2026",
    read: "8 MIN READ",
    category: "Security",
    tags: ["security", "npm"],
    content: `
On March 31, 2026, one of the most widely used JavaScript libraries — Axios — was silently compromised.

For a brief window of roughly two hours, attackers turned a trusted package into a malware delivery system.

And the scariest part?

Most developers didn’t even realize it happened.

---

## What actually happened?

Attackers gained access to the npm account of a core Axios maintainer.

Using that access, they published two malicious versions:

- axios@1.14.1  
- axios@0.30.4  

These versions looked completely normal.

But under the hood, they included a hidden dependency called "plain-crypto-js".

This package was not part of Axios.

It was a trojan.

---

## How the attack worked

When developers ran:

npm install axios

The malicious dependency executed automatically using npm’s postinstall script.

Within seconds, it downloaded a Remote Access Trojan (RAT) onto the system.

This malware worked across:

- Windows  
- macOS  
- Linux  

Once installed, it could:

- execute commands  
- access files  
- steal credentials  
- maintain persistent access  

The system was fully compromised.

---

## Why this attack is dangerous

Axios is used everywhere.

From small personal projects to large production systems.

It gets downloaded over 100 million times per week.

That means even a short attack window can impact thousands of developers globally.

The attack also removed its own traces after execution.

So even if you checked your node_modules later, everything looked clean.

That’s what makes supply chain attacks so powerful.

They exploit trust.

---

## Timeline of the attack

- March 30: attacker prepares malicious dependency  
- March 31 (00:21 UTC): malicious Axios version published  
- Within minutes: developers start installing it  
- ~2–3 hours later: npm removes the package  

In just a few hours, systems around the world were exposed.

---

## Who was behind it?

Security researchers linked the attack to a North Korea–associated threat group known as UNC1069.

This group has previously targeted:

- crypto platforms  
- developers  
- financial systems  

Their goal is usually financial gain or long-term access.

---

## What should you do?

If you installed Axios during that time window:

Treat your system as compromised.

Recommended actions:

- Rotate all API keys and secrets  
- Reinstall your system if possible  
- Check for unknown processes  
- Audit dependencies  

If you're unsure — assume breach.

---

## The bigger lesson

This wasn’t just an Axios problem.

It’s a wake-up call.

Modern development relies heavily on open-source packages.

But every dependency introduces risk.

One compromised package can affect millions.

The real issue isn’t Axios.

It’s the ecosystem.


`
  },
  {
     slug: "why-developer-portfolios-look-same",
    title: "Why 90% of Developer Portfolios Look Same",
    desc: "How to actually stand out.",
    date: "FEB 28, 2026",
    read: "5 MIN READ",
    category: "Design",
    tags: ["portfolio"],
    content: `
Most developer portfolios look identical.

Dark background. Big heading. “Hi, I’m a developer.”  
A few projects. A contact button.

And that’s the problem.

---

## Why do they all look the same?

Because everyone follows the same template.

You watch one YouTube tutorial.  
Copy one Dribbble design.  
Clone one GitHub repo.

And suddenly…

Your portfolio looks like thousands of others.

---

## The comfort trap

It feels safe to follow trends.

You think:
“If this design works, I’ll just do the same.”

But hiring managers see hundreds of portfolios.

And when everything looks familiar…

Nothing stands out.

---

## You're showing skills, not thinking

Most portfolios focus on:

- frameworks  
- tools  
- tech stack  

But they ignore the most important thing:

How you think.

Anyone can copy a UI.  
Very few can design an experience.

---

## What actually makes a portfolio stand out

Not more animations.  
Not more gradients.

But clarity.

A great portfolio answers:

- Who are you?
- What do you solve?
- Why should someone hire you?

---

## Story > Design

Your portfolio is not a gallery.

It’s a story.

Instead of saying:

“I built a React app”

Say:

“I helped users reduce task time by 40% using a custom dashboard.”

That’s impact.

That’s memorable.

---

## Stop copying, start creating

Inspiration is fine.

Copying is not.

The goal is not to look like a designer.

The goal is to communicate like a problem solver.

---

## Think like a product, not a page

Your portfolio is a product.

It should have:

- clear flow  
- intentional sections  
- meaningful interactions  

Every scroll should feel purposeful.


`
  },
  {
    slug: "hidden-cost-npm-packages",
    title: "Hidden Cost of Too Many NPM Packages",
    desc: "How dependencies kill performance.",
    date: "FEB 25, 2026",
    read: "8 MIN READ",
    tags: ["npm", "webdev"],
    content: `
Installing a package feels harmless.

One command.  
Done in seconds.

But every install comes with a cost.

And most developers ignore it.

---

## The illusion of convenience

npm makes everything easy.

Need a utility?

Install it.

Need a feature?

Install it.

Need something you could write in 20 lines?

Still… install it.

That convenience adds up.

---

## Every dependency is a risk

Each package you install:

- runs code on your system  
- brings its own dependencies  
- expands your attack surface  

You’re not just installing one package.

You’re trusting an entire chain of code.

---

## The supply chain problem

Modern apps are built on layers of dependencies.

Your project → depends on packages  
Those packages → depend on more packages  
And so on…

One compromised package can affect thousands of projects.

You’ve already seen it happen.

---

## Performance quietly suffers

More packages = bigger bundle.

Which means:

- slower load times  
- more parsing  
- worse performance  

And most of the time…

You’re using only a tiny part of that library.

---

## Maintenance becomes harder

Dependencies don’t stay stable.

They:

- break  
- deprecate  
- introduce bugs  
- change APIs  

Now your project depends on something you don’t control.

---

## You stop thinking

The biggest cost isn’t security or performance.

It’s thinking.

When you rely too much on packages…

You stop solving problems yourself.

You stop understanding what’s happening under the hood.

---

## Less is powerful

Some of the best codebases:

- use fewer dependencies  
- rely on native APIs  
- keep things simple  

Because simplicity scales.

---

## When should you use a package?

Use one when:

- the problem is complex  
- it saves significant time  
- it’s widely trusted and maintained  

Not when it’s just “easier”.

`,
  },
  {
  slug: "why-nextjs-portfolios-are-poorly-optimized",
  title: "Why Most Next.js Portfolios Are Poorly Optimized (And How to Fix Yours)",
  desc: "Your portfolio might score 100 but still feel slow. Here's why.",
  date: "FEB 22, 2026",
  read: "9 MIN READ",
  category: "Career",
  tags: ["nextjs", "performance", "optimization"],
  content: `
Most Next.js portfolios look fast.

But they aren’t.

They just *appear* optimized.

---

## The Lighthouse illusion

You run Lighthouse.

Score: 100.

Feels good.

But real users still experience:

- slow interactions  
- delayed animations  
- janky scrolling  

Because Lighthouse doesn’t measure everything.

---

## Too much JavaScript

Modern portfolios ship way more JS than needed.

Why?

Because everything is interactive.

Everything is client-side.

Everything uses libraries.

---

## Animation abuse

Smooth ≠ heavy.

Most developers:

- use too many motion libraries  
- animate everything  
- ignore performance impact  

The result?

Lag.

---

## What actually matters

Performance is not a score.

It’s a feeling.

Your site should feel:

- instant  
- responsive  
- smooth  

---

## Fix it properly

- Use server components  
- Reduce JS where possible  
- Optimize images  
- Avoid unnecessary libraries  

`
},
{
  slug: "how-to-stand-out-as-developer-2026",
  title: "How to Stand Out as a Developer in 2026 (Without Open Source Fame)",
  desc: "You don’t need 10k GitHub stars. You need strategy.",
  date: "FEB 19, 2026",
  read: "7 MIN READ",
  tags: ["career", "developer", "growth"],
  content: `
Everyone is learning to code.

Few stand out.

---

## The myth

You think you need:

- open source fame  
- thousands of followers  
- viral projects  

You don’t.

---

## What actually works

Clarity.

If someone visits your portfolio, they should instantly know:

- what you do  
- what you're good at  
- why you matter  

---

## Show proof

Don’t say:

“I am passionate”

Show:

- real projects  
- real problems solved  
- real outcomes  

---

## Communication is a superpower

Most developers can code.

Very few can explain.

If you can:

You win.


`
},
{
  slug: "github-and-blogs-new-resume",
  title: "Why GitHub and Technical Blogs Are the New Resume in 2026",
  desc: "Resumes are filtered. Work is visible.",
  date: "FEB 16, 2026",
  read: "7 MIN READ",
  tags: ["career", "github", "hiring"],
  content: `
Resumes are dying.

Not literally.

But practically.

---

## The hiring shift

Companies don’t trust resumes anymore.

They trust:

- code  
- projects  
- writing  

Because that’s real.

---

## GitHub shows consistency

Anyone can claim skills.

GitHub shows:

- what you build  
- how often you build  
- how you think  

---

## Blogs show thinking

Code shows output.

Writing shows reasoning.

When you write:

You prove understanding.

---

## Why this matters

In 2026:

Attention is limited.

Hiring managers don’t have time.

They scan.

And what they see quickly matters.

`
}
];