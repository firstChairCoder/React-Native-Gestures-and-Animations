## 02: Slider

In this video, the slider (carousel) for the OnboardingScreen was built. The following things were accomplished by the end of this video

### TODO:
- Creation of Slide, SubSlide and Button components.
- `backgroundColor` prop animation when moving through slides.
- Code cleanup to allow data be referenced from a single source of truth (SSOT).

### (End of video) Screenshots:

<img src="https://github.com/firstChairCoder/React-Native-Gestures-and-Animations/blob/02_slider/_static/02.1_slider.jpg" height="300" />  =>  <img src="https://github.com/firstChairCoder/React-Native-Gestures-and-Animations/blob/02_slider/_static/02.2_slider.jpg" height="300" />
=>  <img src="https://github.com/firstChairCoder/React-Native-Gestures-and-Animations/blob/02_slider/_static/02.3_slider.jpg" height="300" />
=>  <img src="https://github.com/firstChairCoder/React-Native-Gestures-and-Animations/blob/02_slider/_static/02.4_slider.jpg" height="300" />


### Notes:
1. In `.\src\components\Button.tsx`, the use of **.defaultProps** is changed. We used deconstructing to declare the default variable instead which is becoming the more standard practice.
2. There's a well-detailed issue with the **interpolateColor** function from react-native-redash that causes the color animation to be buggy. The simple fix of using `any` as recommended in the issue linked in the `Onboarding.tsx` file did the trick.
3. At the time of writing, the scrollTo() ScrollView method comes with the following note in the official docs:
>> Note: The weird function signature is due to the fact that, for historical reasons, the function also accepts separate arguments as an alternative to the options object. This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
This affects newer RN versions than the ones used here, but the method should work fine all the same.
4. The !!(double-bang) used in line 86 in the `Onboarding.tsx` is a special type of logical operator. It converts the value to a boolean if it isn't already (In our case, we get either **1**(_true_) or **0**(_false_) as answers.) I like this S/O [answer](https://stackoverflow.com/a/32572016/17180119)... "Bang, bang, you're boolean!"
5. The hex colors used will appear differently on different platforms, and indeed on different devices. This is particularly true for the hues used in slides _3_ and _4_
