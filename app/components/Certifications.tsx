import React from 'react'

const Certifications = () => {
  const certs = [
    {
      companyLogo: "/aws.png",
      companyName: "Amazon Web Services",
      certName: "AWS CLOUD PRACTITIONER"
    },
    {
      companyLogo: "/cisco.png",
      companyName: "Cisco Networking Academy",
      certName: "Cisco netwrok"
    },
    {
      companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      companyName: "Oracle Academy",
      certName: "Database Programming with SQL"
    }
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 w-full border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-16 uppercase tracking-wider">
          My Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition duration-300"
            >
              {/* Company Logo Image */}
              <div className="h-20 w-20 flex items-center justify-center mb-6">
                <img 
                  src={cert.companyLogo} 
                  alt={cert.companyName} 
                  className=""
                />
              </div>
              
              {/* Company Name */}
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                {cert.companyName}
              </h4>
              
              {/* Certificate Name under Company Name */}
              <h3 className="text-lg font-bold text-white tracking-tight">
                {cert.certName}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications