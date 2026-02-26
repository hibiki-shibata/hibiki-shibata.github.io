import SoftwareIcons from '../softwareIcons'

function techExpertise() {
    return (
        <>
            <div className="flex flex-row items-center justify-center gap-15">
                <div>
                    <h2 className='text-2xl font-bold mb-3'>Used</h2>
                    <ul className="list-disc font-base">
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
                    <h2 className='text-2xl font-bold mb-3'>Elementary</h2>
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
            <div className='flex flex-wrap justify-center gap-2 px-5 mt-5'>
                <SoftwareIcons />
            </div>
        </>
    )
}

export default techExpertise