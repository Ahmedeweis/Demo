export const brandName = 'Spaciaz'
export const phone = '+(084) 123 - 456 88'
export const phoneHref = phone.replace(/[^\d+]/g, '')

export const navItems = [
  { label: 'Demos', mega: true, children: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((n) => `Home ${n}`) },
  { label: 'Pages', children: ['About Us', 'Core Values', 'Our Awards', 'Our Team', 'Team Single', 'Careers', 'FAQs', 'Error Page'] },
  { label: 'Services', children: ['Services Style 01', 'Services Style 02', 'Services Style 03', 'Service Details'] },
  { label: 'Projects', active: true, children: ['Projects Grid Style', 'Projects List Style', 'Project Details'] },
  { label: 'News', children: ['News Gridview', 'News Listview', 'Single Post'] },
  { label: 'Contact', children: [] },
]

export const project = {
  title: 'Greenview Apartments',
  location: 'Hollywood, Florida',
  address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
  overview: [
    { key: 'status', icon: 'layer-2', label: 'Status', value: 'Under Construction' },
    { key: 'type', icon: 'buliding-2', label: 'Project Type', value: 'Apartment' },
    { key: 'area', icon: 'format-square', label: 'Project Area', value: '26,346.74 Sq. Ft.' },
    { key: 'date', icon: 'calendar-2', label: 'Commencement date', value: '28 Jun, 2021' },
    { key: 'price', icon: 'dollar-circle', label: 'Price Range', value: '$600k – $1.9M' },
  ],
  description: [
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam.',
    'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium.',
  ],
  keyDetails: [
    { label: 'Location:', value: 'Central Business District.' },
    { label: 'Total Built-Up Area:', value: '350,000 sq. ft.' },
    { label: 'Number of Floors:', value: '20, including two underground levels for parking.' },
    { label: 'Special Features:', value: 'Vertical garden facade, collaborative workspaces, and an energy-efficient HVAC system.' },
    { label: 'Amenities:', value: 'Gym, café, daycare, and rooftop event space.' },
  ],
  features: [
    { key: 'security', icon: 'security', label: '24x7 Security', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { key: 'surveillance', icon: 'system', label: 'Surveillance System', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.' },
    { key: 'fitness', icon: 'weight', label: 'Fitness Center', text: 'Consectetur quae ab illoentore veritatis' },
    { key: 'children', icon: 'guard', label: "Children's play area", text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore.' },
    { key: 'maintenance', icon: 'maintenance', label: '24 hour maintenance', text: 'Consectetur quae ab illoentore veritatis' },
    { key: 'pool', icon: 'swimming-pool', label: 'Swimming Pool', text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore.' },
    { key: 'fire', icon: 'firefighting', label: 'Firefighting System', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { key: 'garden', icon: 'tree', label: 'Landscape Garden', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.' },
  ],
  distances: [
    { label: 'Coast', value: '300m' },
    { label: 'University', value: '750m' },
    { label: 'Supermarket', value: '500m' },
    { label: 'Park', value: '1120m' },
    { label: 'Railway station', value: '1750m' },
    { label: 'Airport', value: '3158m' },
    { label: 'Bus station', value: '450m' },
    { label: 'Bank', value: '415m' },
    { label: 'Hospital', value: '350m' },
  ],
  previousProject: 'Premier Office Tower',
  nextProject: 'Mixed-Use Development',
  mapUrl: 'https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near',
  streetViewUrl: 'https://www.google.com/maps/embed?pb=!4v1744256141658!6m8!1m7!1sl64WTLlToUR6asEnbv0CaQ!2m2!1d40.69287424788244!2d-74.01886910680169!3f197.8103908012273!4f11.502767589312512!5f0.7820865974627469',
  videoId: 'l6EzZafb1Pk',
}

export const footerLinks = [
  ['About Us', 'Why Choose Us', 'Our Team', 'Solutions', 'Partners', 'Core Values'],
  ['Our Projects', 'News & Updates', 'Terms & Conditions', 'Support Center', 'Contact'],
]

export const socials = ['Facebook', 'Instagram', 'Youtube', 'Twitter']
