# From Idea-to-Production (Software Edition)
Creator: [Otis Zeon, MD](https://otiszeon.com); Created on August 8th, 2018

Its actually much difficult, when you decide to build your own mobile, to becoming the next Mark Zuckerberg. The reason only a few people make this
journey is because the process is meticulous. It takes patience, close
attention to detail and adoptability. I have read many 'How to's' without
much success. My frustrations in attempting to build my own product from idea to production has lead me to this program. I have user and referenced dozens of top level guides, articles and examples from the best of the best. For example [iOS](https://developer.apple.com/design/human-interface-guidelines/ios/overview/interface-essentials/), [Android](https://developer.android.com/design/) and other top designs companies. All sources are reference at the bottom and a link is place in the repository for quick access.
## Please note those work are sole legal property of the creator.

## Mission
 * Help Individual and Start-ups Validate their idea(s)
 * Test Idea against already established Product and Industry
 * Established a Realistic cost Benefit relationships
 * Create a Comprehensive Roadmap from the Idea to Production
 * Launch and Maintain a Production Ready Product/Service
Testing Fuse and Medtronic More tests

## This Is Not Simply a Click, Plug and Play Guide !
There are hundreds of those on the internet. This guide is for those who seriously want to take a concept and make it into a real World product and help change the world in the process. On Average it may take 3 to 6 months to complete this guide depending on the number of people on your team, your technology acumen and importantly your passion for achieving your goal.

Kindly stick to the best practices you learn in this Guide and by the end you will have a product ready for production.

# Core Five Steps
Start with Step 1 and follow through all the way to the end. Please make sure you enjoy the process. Good luck, go forth and change the World!

Design Templates Cloning Process
1. Clone template repository with the tag `--bare`
2. Create your private repository
3. Enter your private repository and clone `--Mirror` the Design Template
4. Push your private repository
5. Pull updates from the Design Template

## Steps Listed Below

<td class="answercell">
    <div class="post-text" itemprop="text">
<p>The answers are correct but don't mention how to sync code between the public repo and the fork.</p>

<p>Here is the full workflow (we've done this before open sourcing <a href="https://github.com/facebook/react-native">React Native</a>):</p>

<hr>
<p>First, duplicate the repo as others said (details <a href="https://help.github.com/articles/duplicating-a-repository/">here</a>):</p>

<p>Create a new repo (let's call it <code>private-repo</code>) via the <a href="https://github.com/new">Github UI</a>. Then:</p>

<pre><code>git clone --bare https://github.com/exampleuser/public-repo.git
cd public-repo.git
git push --mirror https://myusername:mypassword@github.com/yourname/private-repo.git
cd ..
rm -rf public-repo.git
</code></pre>

<hr>

<p>Clone the private repo so you can work on it:</p>

<pre><code>git clone https://github.com/yourname/private-repo.git
cd private-repo
make some changes
git commit
git push origin master
</code></pre>

<hr>

<p>To pull new hotness from the public repo:</p>

<pre><code>cd private-repo
git remote add public https://github.com/exampleuser/public-repo.git
git pull public master # Creates a merge commit
git push origin master
</code></pre>

<p>Awesome, your private repo now has the latest code from the public repo plus your changes.</p>

<hr>

<p>Finally, to create a pull request private repo -&gt; public repo:</p>

<p>The only way to create a pull request is to have push access to the public repo. This is because you need to push to a branch there (<a href="http://stackoverflow.com/questions/14821583/pull-request-without-forking">here's why</a>).</p>

<pre><code>git clone https://github.com/exampleuser/public-repo.git
cd public-repo
git remote add private_repo_yourname https://github.com/yourname/private-repo.git
git checkout -b pull_request_yourname
git pull private_repo_yourname master
git push origin pull_request_yourname
</code></pre>

<p>Now simply create a pull request via the Github UI for public-repo, as described <a href="https://help.github.com/articles/creating-a-pull-request/">here</a>.</p>

<p>Once project owners review your pull request, they can merge it.</p>

<p>Of course the whole process can be repeated (just leave out the steps where you add remotes). </p>
    </div>




## Table of content
* [1. one](/1-Design-Phase)
* [2. two](/2-HandOffPhase)
* [3. three](/3-ProductionPhase)
* [4. four](/4-PortfolioPhase)
* [5. five](/)
* [6. six](/)


## [1. one](/)
## [2. two](/)
## [3. three](/)
## [4. four](/)
## [5. five](/)
## [6. six](/)



## [1. Research - START HERE](/1-RESEARCH)
  * [Idea or Concept]()
  * [Strategy]()
  * [Market Analysis]()
  * [Monetization]()
  * [Marketing]()
  * [Road to MVP]()


## [2. Designs](/2-DESIGNS)
  * [User Experience]()
  * [User Interface]()
  * [Design to Developer Handoff]()


## [3. Technical Stack](/3-TECHNICAL-STACK)
  * [Frontend]()
  * [Backend]()
  * [Network Security]()


## [4. Development Iterations](/3-DEVELOPMENT-ITERATIONS)
  * [Planning]()
  * [Development]()
  * [Testing]()
  * [Errors Fixes]()
  * [Review]()


## [5. Production](/5-PRODUCTION)
  * [Extended Review]()
  * [Maintenance Cost]()
  * [Deployment]()
  * [Monitoring]()
  * [Bugs Reports]()
  * [New Features]()



# Sources : References and Citation

## 1. [Mobile App Development Process](https://thebhwgroup.com/blog/mobile-app-development-process)
  * Author: [Paul Francis](https://thebhwgroup.com/users/pfrancis)      |     [Contact : ]()      |     [Follow on Twitter ](https://twitter.com/bhwgrp)
  * Date Published: Monday, 06/05/17     |     Source: [TheBHWGroup.com](https://thebhwgroup.com/)
  * Company: [The HBW Group](https://thebhwgroup.com/)      |     [Follow on Twitter](https://twitter.com/bhwgrp)
  * Article : [Read or Download](Assets/1-Articles/1-Paul-Francis/Article-Paul-Francis.md)


## 1. [Mobile App Development Process](https://thebhwgroup.com/blog/mobile-app-development-process)
  * Author: [Paul Francis](https://thebhwgroup.com/users/pfrancis)      |     [Contact : ]()      |     [Follow on Twitter ](https://twitter.com/bhwgrp)
  * Date Published: Monday, 06/05/17     |     Source: [TheBHWGroup.com](https://thebhwgroup.com/)
  * Company: [The HBW Group](https://thebhwgroup.com/)      |     [Follow on Twitter](https://twitter.com/bhwgrp)
  * Article : [Read or Download](Assets/1-Articles/1-Paul-Francis/Article-Paul-Francis.md)

## 2. [Mobile App Development Process](https://thebhwgroup.com/blog/mobile-app-development-process)
  * Author: [Paul Francis](https://thebhwgroup.com/users/pfrancis)      |     [Contact : ]()      |     [Follow on Twitter ](https://twitter.com/bhwgrp)
  * Date Published: Monday, 06/05/17     |     Source: [TheBHWGroup.com](https://thebhwgroup.com/)
  * Company: [The HBW Group](https://thebhwgroup.com/)      |     [Follow on Twitter](https://twitter.com/bhwgrp)
  * Article : [Read or Download](Assets/1-Articles/1-Paul-Francis/Article-Paul-Francis.md)





#  [licensed](https://en.wikipedia.org/wiki/Software_license)
Our public copyright licenses incorporate a unique and innovative “three-layer” design. Each license begins as a traditional legal tool, in the kind of language and text formats that most lawyers know and love. We call this the Legal Code layer of each license.

But since most creators, educators, and scientists are not in fact lawyers, we also make the licenses available in a format that normal people can read — the Commons Deed (also known as the “human readable” version of the license). The Commons Deed is a handy reference for licensors and licensees, summarizing and expressing some of the most important terms and conditions. Think of the Commons Deed as a user-friendly interface to the Legal Code beneath, although the Deed itself is not a license, and its contents are not part of the Legal Code itself.


* [Comparison of free and open-source software licenses](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses)
* [Digital rights management](https://en.wikipedia.org/wiki/Digital_rights_management)
* [Copy protection](https://en.wikipedia.org/wiki/Copy_protection)
* [Dual-licensing](https://en.wikipedia.org/wiki/Multi-licensing)
* [Index of Articles Relating to Terms of Service and Privacy Policies](https://en.wikipedia.org/wiki/Index_of_articles_related_to_terms_of_service_and_privacy_policies)
* [License-free software](https://en.wikipedia.org/wiki/License-free_software)
* [License manager](https://en.wikipedia.org/wiki/License_manager)
* [Product activation](https://en.wikipedia.org/wiki/Product_activation)
* [Product key](https://en.wikipedia.org/wiki/Product_key)
* [Rights Expression Language](https://en.wikipedia.org/wiki/Rights_Expression_Language)
* [Software metering](https://en.wikipedia.org/wiki/Software_metering)
* [Terms of service](https://en.wikipedia.org/wiki/Terms_of_service)
* [Perpetual access](https://en.wikipedia.org/wiki/Perpetual_access)
* [Copyright licenses (category)](https://en.wikipedia.org/wiki/Category:Copyright_licenses)
* [Software by license (category)](https://en.wikipedia.org/wiki/Category:Software_by_license)

# [Main Title]()
Updated: ()  |   Author: [Otis Zeon](www.otiszeon.com)
Description





## Navigation
<| [Previous](17-Design-System-Fuse-GitHub)      |     [Next](/1-Design-Phase) |>

## Companies Using Protocols

## Questions? Need Help? Found a bug?

## Special Thanks
## Contributors

##
## Opensource links

* https://facebook.design/
* https://www.mockplus.com/blog/post/sketch-ui-kit

## List of Protocols
* https://learnui.design/blog/ios-font-size-guidelines.html

## Android
* https://designsprintkit.withgoogle.com/
* https://material.io/tools/devices/
* https://material.io/design/typography/#applying-the-type-scale
* https://learnui.design/blog/font-size-principles-resources.html

## iOS
* https://ivomynttinen.com/blog/ios-design-guidelines
* https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/
* https://material.io/design/typography/#type-scale
* https://developer.apple.com/design/human-interface-guidelines/


## typography
* https://www.mockplus.com/blog/post/typography-in-mobile-design
* https://www.uxmatters.com/mt/archives/2015/09/type-sizes-for-every-device.php
* https://medium.muz.li/typography-in-mobile-design-15-best-practices-to-excellent-ui-5eaf18280ad

## supportive
* https://medium.com/level-up-web/developer-roadmaps-all-in-one-place-75c0402db0e0
