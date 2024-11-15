import VueProductTour from './VueProductTour.vue'
import { ref } from 'vue'
export default {
  title: 'Lib/Components/VueProductTour',

  component: VueProductTour,
}

const DefaultTemplate = (args) => ({
  components: { VueProductTour },

  setup() {
    const productTourPoppin = ref(false)
    const displayDocSubMenu = ref(false)
    return { args, productTourPoppin, displayDocSubMenu }
  },

  mounted() {
    this.$refs['productTourPoppin'].startTour()
  },

  template: `
    <div class="bg-black relative min-h-screen">
      <VueProductTour v-bind="args" ref="productTourPoppin" />
      <div class="lg:max-w-[1200px] mx-auto">
        <nav class="flex float-end p-5 relative">
          <div>
            <div id="nav-doc" class="cursor-pointer text-purple-400 text-lg" @click="displayDocSubMenu = !displayDocSubMenu">Documentation</div>
            <div id="nav-doc-sub-container" class="bg-purple-950 p-5 rounded-lg flex flex-col gap-2 text-white absolute right-5 mt-2" v-if="displayDocSubMenu">
              <p class="cursor-pointer">How to install</p>
              <p class="cursor-pointer">Online Documentation</p>
              <p class="cursor-pointer">Storybook</p>
            </div>
          </div>
        </nav>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-balance py-2 text-center pt-[10rem]"
        >
          <span class="title-product">VueProductTour – The Easiest Way to Guide Your Users in Your Vue App</span>
        </h1>
        <div class="mt-20">
          <div class="flex text-center gap-10">
            <div class="seamless flex-1">
              <h3>
                <span class="text-2xl font-bold text-white">Seamless User Onboarding</span>
              </h3>
              <p class="text-gray-300 mt-3">
                VueProductTour is a Vue.js component that creates guided, step-by-step product tours
                to help users navigate your app intuitively.
              </p>
            </div>
            <div id="easy-to-use" class="flex-1">
              <h3>
                <span class="text-2xl font-bold text-white">Lightweight and Ready to Use</span>
              </h3>
              <p class="text-gray-300 mt-3">
                VueProductTour is designed to be minimal and easy to implement, with a default
                template that’s ready to go out of the box. Get a fully functional tour set up in
                minutes!
              </p>
            </div>
            <div class="customizable flex-1">
              <h3>
                <span class="text-2xl font-bold text-white">Fully Customizable</span>
              </h3>
              <p class="text-gray-300 mt-3">
                Easily adapt VueProductTour to your app’s unique design. With flexible options for
                styling, you can integrate custom elements, colors, and animations to match your
                brand.
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            class="hidden md:block absolute left-[calc(50%-4rem)] top-[calc(50%-20rem)] transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
          >
            <div
              style="
                clip-path: polygon(
                  73.6% 51.7%,
                  91.7% 11.8%,
                  100% 46.4%,
                  97.4% 82.2%,
                  92.5% 84.9%,
                  75.7% 64%,
                  55.3% 47.5%,
                  46.5% 49.4%,
                  45% 62.9%,
                  50.3% 87.2%,
                  21.3% 64.1%,
                  0.1% 100%,
                  5.4% 51.1%,
                  21.4% 63.9%,
                  58.9% 0.2%,
                  73.6% 51.7%
                );
              "
              class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            ></div>
          </div>
        </div>
        <div class="documentation flex text-gray-300 text-center gap-10 mt-20">
          <div class="border-2 rounded-lg p-5 flex-1 flex flex-col gap-5">
            <h3 class="text-white text-xl font-bold">Start Using VueProductTour</h3>
            <p>Jump right in and add VueProductTour to your project with a few simple steps.</p>
            <span
              class="text-blue-400 leading-6 cursor-pointer hover:text-blue-600 group w-fit mx-auto relative items-center flex"
            >
              Start with the installation guide
            </span>
          </div>
          <div class="border-2 rounded-lg p-5 flex-1 flex flex-col gap-5">
            <h3 class="text-white text-xl font-bold">Online Documentation</h3>
            <p>
              Access the full documentation for detailed guidance on setup, customization, and
              advanced features.
            </p>
            <span
              class="text-blue-400 leading-6 cursor-pointer hover:text-blue-600 group w-fit mx-auto relative items-center flex"
            >
              Explore the docs
            </span>
          </div>
          <div class="border-2 rounded-lg p-5 flex-1 flex flex-col gap-5">
            <h3 class="text-white text-xl font-bold">Interactive Storybook</h3>
            <p>
              Explore VueProductTour in action with our Storybook. See real-time demos and experiment
              with different configurations and styling options.
            </p>
            <span
              class="text-blue-400 leading-6 cursor-pointer hover:text-blue-600 group w-fit mx-auto relative items-center flex"
            >
              Check out the Storybook
            </span>
          </div>
        </div>
      </div>
    </div>

  `,
})

export const Default = DefaultTemplate.bind({})

Default.args = {
  tourId: 'tour1',
  steps: [
    {
      target: '.title-product',
      title: 'Welcome to VueProductTour!',
      description:
        'Take a guided tour through VueProductTour, the ultimate tool for creating intuitive, in-app user guides for your Vue application.',
    },
    {
      target: '.seamless',
      title: 'What is it ?',
      description:
        'VueProductTour enables you to build step-by-step user guides effortlessly, making it easy for users to navigate through your app and understand its features intuitively.',
      tag: 'New!',
    },
    {
      target: '#easy-to-use',
      title: 'Ready to use',
      description:
        'VueProductTour is designed to be minimal and straightforward to use. With a ready-to-go default template, you can set up a fully functional tour in minutes.',
      tag: 'Easy to use',
    },
    {
      target: '.customizable',
      title: 'Open for customization',
      description:
        "With flexible customization options, VueProductTour allows you to tailor each step of your tour to fit your app's unique design and brand identity.",
      tag: 'NEW Feature!',
    },
    {
      target: '.documentation',
      title: 'Start Now!',
      description:
        'Need help getting started or looking for advanced features? Our comprehensive documentation provides everything you need to make the most of VueProductTour.',
      tag: 'Documentation',
    },
    {
      target: '#nav-doc-sub-container',
      title: 'Add some code',
      description:
        'You can execute code before or after moving to a step to simulate some user actions, using the parameters <b>beforeScript</b> and <b>afterScript</b> of the step object',
      beforeScript: () => {
        document.getElementById('nav-doc')?.click()
      },
      afterScript: () => {
        console.log('after moving step')
      },
    },
  ],
}

const CustomizedTemplate = (args) => ({
  components: { VueProductTour },

  setup() {
    const productTourPoppin = ref(false)
    const displayDocSubMenu = ref(false)

    return { args, productTourPoppin, displayDocSubMenu }
  },
  methods: {
    closePopup() {
      this.$refs['productTourPoppin'].endTour()
    },
    next() {
      this.$refs['productTourPoppin'].goNextStep()
    },
    previous() {
      this.$refs['productTourPoppin'].goPreviousStep()
    },
  },
  mounted() {
    this.$refs['productTourPoppin'].startTour()
  },
  template: `
    <div class="bg-black relative min-h-screen">
      <VueProductTour v-bind="args" ref="productTourPoppin" v-slot="slotProps">
        <div class="relative bg-yellow-50 rounded-xl shadow-2xl w-80 p-6 text-center border-4 border-dashed border-yellow-400 transform transition-all duration-500 scale-100 hover:scale-105 animate-bounceIn">
          <!-- Close Button -->
          <button @click="closePopup" class="absolute top-3 pb-1 right-3 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-purple-700 transition duration-200 transform hover:rotate-45">&times;</button>
          
          <!-- Title -->
          <h2 class="text-3xl font-extrabold text-yellow-600 mb-2">{{slotProps.currentStep.title}}</h2>

          <!-- Description -->
          <p class="text-purple-700 text-lg font-medium">
            {{slotProps.currentStep.description}}
          </p>
          <div class="mt-5 flex justify-center gap-3">
            <button @click="previous()" class="px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 shadow-md transform hover:scale-110 transition duration-300 ease-out">Previous</button>
            <button @click="next()" class="px-4 py-2 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 shadow-md transform hover:scale-110 transition duration-300 ease-out">Next</button>
          </div>
        </div>
      </VueProductTour>
      <div class="lg:max-w-[1200px] mx-auto">
        <nav class="flex float-end p-5 relative">
          <div>
            <div id="nav-doc" class="cursor-pointer text-purple-400 text-lg" @click="displayDocSubMenu = !displayDocSubMenu">Documentation</div>
            <div id="nav-doc-sub-container" class="bg-purple-950 p-5 rounded-lg flex flex-col gap-2 text-white absolute right-5 mt-2" v-if="displayDocSubMenu">
              <p class="cursor-pointer">How to install</p>
              <p class="cursor-pointer">Online Documentation</p>
              <p class="cursor-pointer">Storybook</p>
            </div>
          </div>
        </nav>
         <h1
          class="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-balance py-2 text-center pt-[10rem]"
        >
          <span class="title-product">VueProductTour – The Easiest Way to Guide Your Users in Your Vue App</span>
        </h1>
        <div class="mt-20">
          <div class="flex text-center gap-10">
            <div class="seamless flex-1">
              <h3>
                <span class="text-2xl font-bold text-white">Seamless User Onboarding</span>
              </h3>
              <p class="text-gray-300 mt-3">
                VueProductTour is a Vue.js component that creates guided, step-by-step product tours
                to help users navigate your app intuitively.
              </p>
            </div>
            <div id="easy-to-use" class="flex-1">
              <h3>
                <span class="text-2xl font-bold text-white">Lightweight and Ready to Use</span>
              </h3>
              <p class="text-gray-300 mt-3">
                VueProductTour is designed to be minimal and easy to implement, with a default
                template that’s ready to go out of the box. Get a fully functional tour set up in
                minutes!
              </p>
            </div>
            <div class="customizable flex-1">
              <h3>
                <span class="text-2xl font-bold text-white">Fully Customizable</span>
              </h3>
              <p class="text-gray-300 mt-3">
                Easily adapt VueProductTour to your app’s unique design. With flexible options for
                styling, you can integrate custom elements, colors, and animations to match your
                brand.
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            class="hidden md:block absolute left-[calc(50%-4rem)] top-[calc(50%-20rem)] transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
          >
            <div
              style="
                clip-path: polygon(
                  73.6% 51.7%,
                  91.7% 11.8%,
                  100% 46.4%,
                  97.4% 82.2%,
                  92.5% 84.9%,
                  75.7% 64%,
                  55.3% 47.5%,
                  46.5% 49.4%,
                  45% 62.9%,
                  50.3% 87.2%,
                  21.3% 64.1%,
                  0.1% 100%,
                  5.4% 51.1%,
                  21.4% 63.9%,
                  58.9% 0.2%,
                  73.6% 51.7%
                );
              "
              class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            ></div>
          </div>
        </div>
        <div class="documentation flex text-gray-300 text-center gap-10 mt-20">
          <div class="border-2 rounded-lg p-5 flex-1 flex flex-col gap-5">
            <h3 class="text-white text-xl font-bold">Start Using VueProductTour</h3>
            <p>Jump right in and add VueProductTour to your project with a few simple steps.</p>
            <span
              class="text-blue-400 leading-6 cursor-pointer hover:text-blue-600 group w-fit mx-auto relative items-center flex"
            >
              Start with the installation guide
            </span>
          </div>
          <div class="border-2 rounded-lg p-5 flex-1 flex flex-col gap-5">
            <h3 class="text-white text-xl font-bold">Online Documentation</h3>
            <p>
              Access the full documentation for detailed guidance on setup, customization, and
              advanced features.
            </p>
            <span
              class="text-blue-400 leading-6 cursor-pointer hover:text-blue-600 group w-fit mx-auto relative items-center flex"
            >
              Explore the docs
            </span>
          </div>
          <div class="border-2 rounded-lg p-5 flex-1 flex flex-col gap-5">
            <h3 class="text-white text-xl font-bold">Interactive Storybook</h3>
            <p>
              Explore VueProductTour in action with our Storybook. See real-time demos and experiment
              with different configurations and styling options.
            </p>
            <span
              class="text-blue-400 leading-6 cursor-pointer hover:text-blue-600 group w-fit mx-auto relative items-center flex"
            >
              Check out the Storybook
            </span>
          </div>
        </div>
      </div>
    </div>

  `,
})
export const Customized = CustomizedTemplate.bind({})
Customized.args = {
  tourId: 'tour1',
  defaultTemplate: false,
  steps: [
    {
      target: '.title-product',
      title: 'Welcome to VueProductTour!',
      description:
        'Take a guided tour through VueProductTour, the ultimate tool for creating intuitive, in-app user guides for your Vue application.',
    },
    {
      target: '.seamless',
      title: 'What is it ?',
      description:
        'VueProductTour enables you to build step-by-step user guides effortlessly, making it easy for users to navigate through your app and understand its features intuitively.',
      tag: 'New!',
    },
    {
      target: '#easy-to-use',
      title: 'Ready to use',
      description:
        'VueProductTour is designed to be minimal and straightforward to use. With a ready-to-go default template, you can set up a fully functional tour in minutes.',
      tag: 'Easy to use',
    },
    {
      target: '.customizable',
      title: 'Open for customization',
      description:
        "With flexible customization options, VueProductTour allows you to tailor each step of your tour to fit your app's unique design and brand identity.",
      tag: 'NEW Feature!',
    },
    {
      target: '.documentation',
      title: 'Start Now!',
      description:
        'Need help getting started or looking for advanced features? Our comprehensive documentation provides everything you need to make the most of VueProductTour.',
      tag: 'Documentation',
    },
    {
      target: '#nav-doc-sub-container',
      title: 'Add some code',
      description:
        'You can execute code before or after moving to a step to simulate some user actions, using the parameters beforeScript and afterScript of the step object',
      beforeScript: () => {
        document.getElementById('nav-doc')?.click()
      },
      afterScript: () => {
        console.log('after moving step')
      },
    },
  ],
}
