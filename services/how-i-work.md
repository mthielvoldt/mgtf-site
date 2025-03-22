---
title: How I Build Momentum
---

# {{$frontmatter.title}}

## Make Firmware Accessible
Firmware intrinsically has a black-box problem.  Users often feel locked out, afraid to break things, and unsure of how to engage.  Here's how I make things clear.

- I provide GUIs that clue the available commands and make data visible.
- I deliver Draw.io diagrams to convey architecture.
- I adjust explanations to different backgrounds and learning preferences.
- I co-pilot alongside you for hand-offs.  You should feel in-control.

## Maintain Momentum with Automated Tests
Without tests, there is a ceiling on the size and complexity a firmware project can reach.  Several vicious cycles erode productivity, and the problem is worse the more complex the project.

The antidote is automated testing, but this is more challenging for firmware than for higher level software because hardware details tend to diffuse into business logic, marrying the code to the hardware they're written for, which often has few if any provisions for tests.  Through research and struggle, I have developed an embedded testing toolkit and skill-set to meet this challenge.

### End to End
End-to-End tests defend the product's intended functions, including those functions used by internal "customers" in engineering and manufacturing.  I prefer to deliver the GUI mentioned above **as a web page**, and write tests in [Playwright][1].  This way, tests cover the UI, delivering true end-to-end coverage. 

### Integration Tests
There are many options for integration tests, ranging from tests run in simulated environments, to tests run on production or production-like hardware.  The right choices here depend on the project.

### Unit Tests
Unit tests are the foundation of testing, and they are as much about encouraging good architecture as about catching bugs before they're bugs.  They run off-target, like on a developer's laptop or a CI server, and as such, they don't cover production hardware details.  I practice Test-Driven Development (TDD) so my code is born with tests.

## Hardware-Friendly Approach
Simulation can be a powerful accelerant for progress, but ideas actually get proven on hardware.  Unfortunately, hardware can be precious and scarce.  When working with hardware that is both fragile and scarce, (often the case with power systems) I write and validate hardware protection code and operating procedures before expanding my hardware-testing focus.  Sometimes a failure gets past my safeguards, so in tandem with writing protections, I also consider a data-capture strategy so if or when a new failure mode crops up, I learn enough about it to improve protections and prevent damage the next time.


## Phases of a Typical Project
1. Clarify requirements, intended uses, and pseudo-code end-to-end tests.
1. Identify technical risk areas, and strategize de-risking each. 
1. Set up for development (accounts, toolchain, CI)
1. Build and get feedback on user/data interfaces.
1. Create needed simulations.
1. Prepare for hardware testing (protections / data capture). 
1. Write code, testing on hardware and getting feedback on features frequently. 
1. Pass acceptance tests.
1. Wrap up with a few iterations on the documentation and codebase hand-offs. 

[1]: https://playwright.dev
[2]: https://www.throwtheswitch.org/unity