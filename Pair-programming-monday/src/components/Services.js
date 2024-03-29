import { services } from "../data";
import Service from "./Service";
import Title from "./Title";
import { useState } from "react";

function Services() {
  const [servicesData, setServicesData] = useState(services);
  console.log(servicesData);

	return (
		<div>
			<section className="section services" id="services">
				<Title title="our" span="services" />
				<div className="section-center services-center">
					{servicesData.map((service) => (
						<Service key={service.id} {...service} />
					))}
				</div>
			</section>
		</div>
  	);
};

export default Services;

