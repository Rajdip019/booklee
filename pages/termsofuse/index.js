import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import Footer from "../components/Footer";


export default function ThankYou() {
    return (
        <>
            <Document />
            <Navbar />
            <GeneralSidebar title="Terms of Use" />
            <div className="lg:w-[calc(100%-300px)] ">
                <div className="lg:ml-[calc(300px+4vw)] w-11/12 mx-auto ">
                    <h1 className="text-4xl font-semibold mt-16">Terms and Conditions of Use</h1>

                    <h1 className="text-xl font-medium mt-16">1. Terms</h1>

                    <p className="my-4">By accessing this Website, accessible from booklee.service.app, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                    <h1 className="text-xl font-medium mt-16">2. User License</h1>

                    <p className="my-4">Permission is granted to temporarily download one copy of the materials on Booklee's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

                        modify or copy the materials;
                        use the materials for any commercial purpose or for any public display;
                        attempt to reverse engineer any software contained on Booklee's Website;
                        remove any copyright or other proprietary notations from the materials; or
                        transferring the materials to another person or "mirror" the materials on any other server.
                        This will let Booklee to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.</p>
                    <h1 className="text-xl font-medium mt-16">3. Disclaimer</h1>

                    <p className="my-4">All the materials on Booklee’s Website are provided "as is". Booklee makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Booklee does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
                    <h1 className="text-xl font-medium mt-16">4. Limitations</h1>
                    <p className="my-4">Booklee or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Booklee’s Website, even if Booklee or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
                    <h1 className="text-xl font-medium mt-16">5. Revisions and Errata</h1>
                    <p className="my-4">The materials appearing on Booklee’s Website may include technical, typographical, or photographic errors. Booklee will not promise that any of the materials in this Website are accurate, complete, or current. Booklee may change the materials contained on its Website at any time without notice. Booklee does not make any commitment to update the materials.</p>
                    <h1 className="text-xl font-medium mt-16">6. Links</h1>
                    <p className="my-4">Booklee has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Booklee of the site. The use of any linked website is at the user’s own risk.</p>
                    <h1 className="text-xl font-medium mt-16">7. Site Terms of Use Modifications</h1>
                    <p className="mt-4 mb-10">Booklee may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                </div>
                <div className="lg:ml-[300px] w-full">
                <Footer />
                </div>
            </div>
        </>
    )
}