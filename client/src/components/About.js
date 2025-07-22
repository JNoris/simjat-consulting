import React from "react";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-12 text-center text-gray-900">
          About SimJat Consulting
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-gray-600 mb-12">
            Three specialized consultants bringing expert knowledge across
            accounting, construction, and technology to help your business
            thrive.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accounting-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-10 w-10 text-accounting-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                15+ Years Experience
              </h3>
              <p className="text-gray-600">
                Combined expertise across all service areas
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-construction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-10 w-10 text-construction-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Dedicated consultants for each specialization
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-it-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-10 w-10 text-it-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Track record with leading organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
