import FirstComponent from './learning-example/FirstComponent'
import {FifthComponent} from './learning-example/FirstComponent'
import SecondComponent from './learning-example/SecondComponent'
// import {ThirdComponent} from './learning-example/ThirdComponent'
// import {FourthComponent} from './learning-example/FourthComponent'
import LearningJavaScript from './learning-example/LearningJavaScript'

export default function LearningComponents() {
    return (
        <div className="LearningComponents">
            <FirstComponent />
            <SecondComponent />
            {/* <ThirdComponent />
            <FourthComponent /> */}
            <FifthComponent />
            <LearningJavaScript/>
        </div>
    )
}