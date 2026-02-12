import SoftwareIcons from '../softwareIcons'

function techExpertise() {
    return (
        <>
            <div className="bg-red-900 p-5 rounded-2xl shadow-lg">
                <h1 data-i18n="techExpertiseTitle">TECH EXPERTISE</h1>
                <div className="flex flex-row items-center justify-center mt-5 gap-15">
                    <div>
                        <h1 >Skilled</h1>
                        <ul className="list-disc">
                            <li>Kotlin </li>
                            <li>Javascript</li>
                            <li>Typescript </li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git</li>
                            <li>Docker / Rancher</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1>Used</h1>
                        <ul className="list-disc">
                            <li>Java </li>
                            <li>Go</li>
                            <li>Redis</li>
                            <li>React JS </li>
                            <li>Apache Kafka</li>
                            <li>Mongo DB</li>
                            <li>Kubernetes</li>
                            <li>AWS</li>
                            <li>GCP</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-2'>
                    <SoftwareIcons />
                </div>
            </div>
        </>
    )
}

export default techExpertise