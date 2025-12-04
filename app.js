// Comprehensive course/modules data based on safety research
const data = {
  courses: [
    // Syllabus is a top-level course
    {
      id: 0,
      slug: 'syllabus-course',
      title: 'Syllabus',
      modules: [
        { 
          id: 1, 
          title: 'Course Overview', 
          content: `
            <h3>Missing Person Awareness & Safety Education</h3>
            <p>This comprehensive safety education program teaches essential skills for personal protection, situational awareness, and crisis prevention.</p>
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Develop situational awareness and threat recognition skills</li>
              <li>Learn self-defense techniques and de-escalation strategies</li>
              <li>Understand home safety and accident prevention</li>
              <li>Recognize signs of abuse and know how to help others</li>
              <li>Gain suicide prevention knowledge and intervention skills</li>
            </ul>
            <h4>Course Structure:</h4>
            <p>Each course contains modules with practical content, interactive elements, and video lessons.</p>
            <div style="margin-top: 20px; padding: 12px; background: rgba(139, 92, 246, 0.1); border-radius: 8px;">
              <strong>Important:</strong> This content is for educational purposes. In emergencies, always call 911 or your local emergency services.
            </div>
          `
        }
      ]
    },
    {
      id: 1,
      slug: 'escaping',
      title: 'Escaping - Self Defense',
      modules: [
        { 
          id: 1, 
          title: 'Situational Awareness & Threat Recognition', 
          content: `
            <h3>Developing Your Safety Radar</h3>
            <p>Situational awareness is your first and most important line of defense. Most attacks can be prevented by recognizing danger early.</p>
            
            <h4>Key Principles:</h4>
            <ul>
              <li><strong>Stay Alert:</strong> Keep your head up, avoid distractions like phones when walking</li>
              <li><strong>Trust Your Instincts:</strong> If something feels wrong, it probably is</li>
              <li><strong>Scan Your Environment:</strong> Regularly check your surroundings for unusual activity</li>
              <li><strong>Identify Escape Routes:</strong> Always know where the exits are</li>
            </ul>
            
            <h4>Warning Signs to Watch For:</h4>
            <ul>
              <li>People concealing their hands or wearing inappropriate clothing for weather</li>
              <li>Someone repeatedly glancing around or watching the same area</li>
              <li>Abrupt changes in movement or direction</li>
              <li>Anyone blocking your path or escape routes</li>
              <li>Behavior that seems out of place for the location</li>
            </ul>
            
            <h4>Environmental Awareness:</h4>
            <p>Stay in well-lit, populated areas. Avoid isolated locations, alleys, and empty parking lots. Choose routes where unusual activity would be noticed by others.</p>
          `
        },
        { 
          id: 2, 
          title: 'Verbal De-escalation & Creating Distance', 
          content: `
            <h3>The Power of Words and Body Language</h3>
            <p>De-escalation is often more effective than physical confrontation. Your goal is to safely exit the situation.</p>
            
            <h4>Body Language for Confidence:</h4>
            <ul>
              <li>Stand upright with shoulders back</li>
              <li>Maintain appropriate eye contact</li>
              <li>Keep hands visible and relaxed</li>
              <li>Position yourself at a slight angle to minimize target profile</li>
              <li>Maintain balanced stance for quick movement</li>
            </ul>
            
            <h4>Verbal Strategies:</h4>
            <ul>
              <li><strong>Use Your Voice:</strong> Yell "Call the police!" or "Back off!" to attract attention</li>
              <li><strong>Set Clear Boundaries:</strong> Speak firmly and directly without aggression</li>
              <li><strong>Stay Calm:</strong> Use a controlled, measured voice</li>
              <li><strong>Don't Negotiate:</strong> If someone wants your belongings, give them up</li>
            </ul>
            
            <h4>Creating Physical Distance:</h4>
            <p>Maintain at least two arm lengths from potential threats. Use objects like cars or tables as barriers. If someone is following you, return to a public, populated area.</p>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(52, 211, 153, 0.1); border-radius: 6px;">
              <strong>Remember:</strong> Your safety is more valuable than any possession. Compliance can be a survival strategy.
            </div>
          `
        },
        { 
          id: 3, 
          title: 'Basic Physical Defense Techniques', 
          content: `
            <h3>Simple, Effective Self-Defense Moves</h3>
            <p>Physical defense should only be used when escape isn't possible. These techniques focus on creating opportunities to get away.</p>
            
            <h4>The Ready Stance:</h4>
            <ul>
              <li>Feet shoulder-width apart</li>
              <li>Non-dominant foot slightly forward</li>
              <li>Hands about 12 inches from face, palms forward</li>
              <li>Creates protective barrier while looking non-confrontational</li>
            </ul>
            
            <h4>Most Effective Strikes for Beginners:</h4>
            <ul>
              <li><strong>Palm Heel Strike:</strong> Target face or jaw - protects your hands from injury</li>
              <li><strong>Eye Strike:</strong> Use fingers to create distance</li>
              <li><strong>Knee Strike:</strong> Target vulnerable areas when in close range</li>
              <li><strong>Stomp:</strong> Use heel to strike attacker's foot or shin</li>
            </ul>
            
            <h4>Breaking Free from Common Holds:</h4>
            <ul>
              <li><strong>Wrist Grab:</strong> Pull toward the thumb (weakest grip point)</li>
              <li><strong>Clothing Grab:</strong> Grab your clothing and their wrist, pull and push simultaneously</li>
              <li><strong>Neck Grab:</strong> Raise arms to squish their hands, then twist away</li>
            </ul>
            
            <h4>Key Principles:</h4>
            <p>These techniques work through proper body mechanics, not strength. Practice slowly first, then build speed. The goal is always to escape, not to fight.</p>
          `
        },
        { 
          id: 4, 
          title: 'Improvised Weapons & Environment Use', 
          content: `
            <h3>Using Everyday Objects for Defense</h3>
            <p>When physical confrontation is unavoidable, everyday objects can help create distance and opportunities to escape.</p>
            
            <h4>Effective Improvised Tools:</h4>
            <ul>
              <li><strong>Keys:</strong> Held between fingers or used to strike</li>
              <li><strong>Umbrella:</strong> Create distance, strike, or block</li>
              <li><strong>Bag/Purse:</strong> Swing to create space, distraction</li>
              <li><strong>Hot Beverages:</strong> Throw to distract and create escape opportunity</li>
              <li><strong>Sand/Dirt:</strong> Throw at eyes to disorient</li>
            </ul>
            
            <h4>Using Your Environment:</h4>
            <ul>
              <li><strong>Car Panic Button:</strong> Creates noise and flashing lights</li>
              <li><strong>Store Alarms:</strong> Pull fire alarms if available</li>
              <li><strong>Barriers:</strong> Put cars, tables, or other objects between you and attacker</li>
              <li><strong>Elevation:</strong> Stairs or platforms can provide tactical advantage</li>
            </ul>
            
            <h4>Legal and Safety Considerations:</h4>
            <p>Only carry items you're trained to use. Many weapons can be taken and used against you. Focus on items that help you escape rather than "fight."</p>
            
            <h4>Escape Preparation:</h4>
            <ul>
              <li>Remove restrictive items (heels, jewelry)</li>
              <li>Keep keys ready for quick car access</li>
              <li>Know multiple exit routes</li>
              <li>Move toward populated, well-lit areas</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 123, 123, 0.1); border-radius: 6px;">
              <strong>Important:</strong> The best self-defense is avoiding dangerous situations. These techniques are last resorts.
            </div>
          `
        }
      ]
    },
    {
      id: 2,
      slug: 'prevention',
      title: 'Prevention',
      modules: [
        {
          id: 1,
          title: 'Personal Safety Planning',
          content: `
            <h3>Creating Your Personal Safety Strategy</h3>
            <p>Prevention starts with planning and awareness. A good safety plan helps you avoid dangerous situations and react appropriately when they occur.</p>
            
            <h4>Daily Safety Habits:</h4>
            <ul>
              <li><strong>Share Your Plans:</strong> Tell trusted people where you're going and when to expect you back</li>
              <li><strong>Trust Your Instincts:</strong> If something feels wrong, change your plans</li>
              <li><strong>Stay Connected:</strong> Keep your phone charged and have emergency contacts readily available</li>
              <li><strong>Vary Your Routine:</strong> Don't be predictable in your daily patterns</li>
            </ul>
            
            <h4>Transportation Safety:</h4>
            <ul>
              <li>Park in well-lit, busy areas</li>
              <li>Check around and inside your car before entering</li>
              <li>Keep doors locked while driving</li>
              <li>Don't pick up hitchhikers or help stranded motorists (call 911 instead)</li>
              <li>If followed, drive to a police station or busy public place</li>
            </ul>
            
            <h4>Digital Safety:</h4>
            <ul>
              <li>Limit personal information shared on social media</li>
              <li>Don't post real-time location updates</li>
              <li>Use privacy settings on all accounts</li>
              <li>Be cautious about meeting online contacts in person</li>
            </ul>
            
            <h4>Communication Plans:</h4>
            <p>Establish check-in times with family/friends. Have code words for emergencies. Know how to quickly contact emergency services.</p>
          `
        },
        {
          id: 3,
          title: 'Travel & Public Space Safety',
          content: `
            <h3>Staying Safe Away From Home</h3>
            <p>Whether traveling or in public spaces, awareness and preparation are key to maintaining your safety.</p>
            
            <h4>Public Transportation Safety:</h4>
            <ul>
              <li>Sit near the driver or conductor when possible</li>
              <li>Stay alert and avoid sleeping</li>
              <li>Keep valuables secure and out of sight</li>
              <li>Have your exit strategy planned</li>
              <li>Trust your instincts about other passengers</li>
            </ul>
            
            <h4>Hotel and Accommodation Safety:</h4>
            <ul>
              <li>Research the area and accommodation before arrival</li>
              <li>Request rooms on floors 2-7 (above ground level, below fire ladder reach)</li>
              <li>Use all available locks and security devices</li>
              <li>Don't advertise that you're alone or a tourist</li>
              <li>Keep curtains closed and avoid ground floor rooms</li>
            </ul>
            
            <h4>ATM and Financial Safety:</h4>
            <ul>
              <li>Use ATMs in well-lit, busy areas</li>
              <li>Be aware of your surroundings while conducting transactions</li>
              <li>Shield your PIN entry</li>
              <li>Don't count money in public</li>
              <li>Have someone accompany you when possible</li>
            </ul>
            
            <h4>Emergency Preparedness:</h4>
            <ul>
              <li>Know local emergency numbers</li>
              <li>Keep copies of important documents</li>
              <li>Have emergency cash in multiple locations</li>
              <li>Research local customs and laws</li>
            </ul>
          `
        },
        {
          id: 4,
          title: 'Digital Security & Online Safety',
          content: `
            <h3>Protecting Yourself in the Digital World</h3>
            <p>Online safety is increasingly important as digital threats can lead to real-world dangers.</p>
            
            <h4>Social Media Safety:</h4>
            <ul>
              <li>Review and adjust privacy settings regularly</li>
              <li>Don't share location data in real-time</li>
              <li>Be cautious about friend requests from strangers</li>
              <li>Avoid posting vacation plans until after you return</li>
              <li>Don't share personal information like addresses or schedules</li>
            </ul>
            
            <h4>Identity Protection:</h4>
            <ul>
              <li>Use strong, unique passwords for each account</li>
              <li>Enable two-factor authentication when available</li>
              <li>Monitor your credit reports regularly</li>
              <li>Be cautious about public WiFi usage</li>
              <li>Shred documents containing personal information</li>
            </ul>
            
            <h4>Online Dating Safety:</h4>
            <ul>
              <li>Meet in public places for initial meetings</li>
              <li>Tell someone about your plans and location</li>
              <li>Don't share personal information too quickly</li>
              <li>Trust your instincts about potential matches</li>
              <li>Have your own transportation to and from dates</li>
            </ul>
            
            <h4>Scam Recognition:</h4>
            <ul>
              <li>Be suspicious of unsolicited contact</li>
              <li>Verify requests for money or personal information</li>
              <li>Don't click suspicious links or download unknown attachments</li>
              <li>Research companies and individuals before trusting them</li>
            </ul>
          `
        },
        {
          id: 5,
          title: 'Child & Family Safety',
          content: `
            <h3>Protecting the Most Vulnerable</h3>
            <p>Children require special safety considerations and education appropriate for their age and development level.</p>
            
            <h4>Teaching Children About Stranger Safety:</h4>
            <ul>
              <li><strong>Safe Adults:</strong> Help children identify trusted adults they can turn to</li>
              <li><strong>The "No, Go, Tell" Rule:</strong> Say no, get away, tell a trusted adult</li>
              <li><strong>Code Words:</strong> Establish family code words for emergencies</li>
              <li><strong>Body Safety:</strong> Teach about appropriate and inappropriate touch</li>
              <li><strong>Internet Safety:</strong> Monitor online activity and teach digital safety</li>
            </ul>
            
            <h4>Home Safety for Families:</h4>
            <ul>
              <li>Secure doors and windows with appropriate locks</li>
              <li>Install and maintain security systems</li>
              <li>Create a family emergency plan</li>
              <li>Practice fire escape routes</li>
              <li>Keep emergency supplies readily available</li>
            </ul>
            
            <h4>School and Activity Safety:</h4>
            <ul>
              <li>Know your child's daily schedule and routes</li>
              <li>Establish pickup procedures with schools and activities</li>
              <li>Meet your child's friends and their parents</li>
              <li>Stay involved in your child's activities</li>
              <li>Monitor changes in behavior that might indicate problems</li>
            </ul>
            
            <h4>Community Involvement:</h4>
            <ul>
              <li>Get to know neighbors and local law enforcement</li>
              <li>Participate in neighborhood watch programs</li>
              <li>Stay informed about local safety issues</li>
              <li>Support community safety initiatives</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(139, 92, 246, 0.1); border-radius: 6px;">
              <strong>Key Principle:</strong> Age-appropriate education empowers children while maintaining their sense of security and trust.
            </div>
          `
        }
      ]
    },
    {
      id: 3,
      slug: 'home-safety',
      title: 'Home Safety',
      modules: [
        {
          id: 1,
          title: 'Accident Prevention & Fall Safety',
          content: `
            <h3>Creating a Safer Home Environment</h3>
            <p>Falls account for half of accidental deaths in the home. Most home accidents are preventable with proper precautions.</p>
            
            <h4>Fall Prevention Strategies:</h4>
            <ul>
              <li><strong>Keep Floors Clear:</strong> Remove clutter, especially in high-traffic areas</li>
              <li><strong>Lighting:</strong> Install adequate lighting throughout your home, including night lights</li>
              <li><strong>Stairway Safety:</strong> Ensure stairs are well-lit, clutter-free, and have proper handrails</li>
              <li><strong>Bathroom Safety:</strong> Use non-slip mats and grab bars in showers and tubs</li>
              <li><strong>Ladder Safety:</strong> Use sturdy step stools instead of makeshift solutions</li>
            </ul>
            
            <h4>Home Maintenance for Safety:</h4>
            <ul>
              <li>Fix loose carpeting and uneven surfaces immediately</li>
              <li>Install safety gates at stairs if needed</li>
              <li>Keep frequently used items at accessible heights</li>
              <li>Paint steps in contrasting colors for visibility</li>
              <li>Clear outdoor walkways promptly after weather events</li>
            </ul>
            
            <h4>Special Considerations for Seniors:</h4>
            <ul>
              <li>Remove or secure throw rugs</li>
              <li>Install grab bars and shower seats</li>
              <li>Ensure medications don't cause dizziness</li>
              <li>Keep emergency contacts and medical information accessible</li>
              <li>Consider medical alert systems</li>
            </ul>
            
            <h4>Child Safety Measures:</h4>
            <ul>
              <li>Install safety gates at appropriate locations</li>
              <li>Secure cabinets and drawers</li>
              <li>Use outlet covers and cord management</li>
              <li>Install window guards or stops</li>
              <li>Store cleaning products and medications safely</li>
            </ul>
          `
        },
        {
          id: 2,
          title: 'Fire Prevention & Electrical Safety',
          content: `
            <h3>Preventing Home Fires and Electrical Hazards</h3>
            <p>Home fires cause 68% of fire deaths. Most electrical fires can be prevented with proper safety practices.</p>
            
            <h4>Kitchen Fire Prevention:</h4>
            <ul>
              <li><strong>Never Leave Cooking Unattended:</strong> Stay with your food while cooking</li>
              <li><strong>Use Back Burners:</strong> Keep pot handles turned inward</li>
              <li><strong>Keep Flammables Away:</strong> Store towels, paper, and other items away from heat sources</li>
              <li><strong>Clean Regularly:</strong> Keep cooking surfaces free of grease buildup</li>
              <li><strong>Have Fire Extinguisher:</strong> Keep one in the kitchen and know how to use it</li>
            </ul>
            
            <h4>Electrical Safety:</h4>
            <ul>
              <li>Avoid overloading outlets and power strips</li>
              <li>Replace damaged cords immediately</li>
              <li>Use appropriate wattage bulbs for fixtures</li>
              <li>Install AFCI and GFCI outlets where required</li>
              <li>Have electrical work done by qualified professionals</li>
            </ul>
            
            <h4>Heating Safety:</h4>
            <ul>
              <li><strong>Space Heaters:</strong> Keep 3 feet from anything flammable</li>
              <li><strong>Fireplace Safety:</strong> Use screens and ensure proper ventilation</li>
              <li><strong>Chimney Maintenance:</strong> Clean regularly and inspect annually</li>
              <li><strong>Water Heater:</strong> Set to 120°F or below to prevent scalding</li>
            </ul>
            
            <h4>Smoke and Carbon Monoxide Detection:</h4>
            <ul>
              <li>Install interconnected smoke alarms in every bedroom and level</li>
              <li>Test detectors monthly and replace batteries annually</li>
              <li>Install carbon monoxide detectors near sleeping areas</li>
              <li>Replace detectors according to manufacturer recommendations</li>
            </ul>
          `
        },
        {
          id: 3,
          title: 'Poisoning Prevention & Chemical Safety',
          content: `
            <h3>Protecting Against Accidental Poisoning</h3>
            <p>Poison control centers managed over 2 million exposure cases in 2023. Most poisonings are preventable with proper storage and awareness.</p>
            
            <h4>Medication Safety:</h4>
            <ul>
              <li><strong>Secure Storage:</strong> Keep medications in locked cabinets, at least 5 feet high</li>
              <li><strong>Proper Disposal:</strong> Use DEA take-back programs or FDA-approved disposal methods</li>
              <li><strong>Check Expiration Dates:</strong> Regularly review and dispose of expired medications</li>
              <li><strong>Child-Resistant Packaging:</strong> Always close containers completely</li>
              <li><strong>Visitor Precautions:</strong> Ensure guests secure their medications</li>
            </ul>
            
            <h4>Household Chemical Safety:</h4>
            <ul>
              <li>Store cleaning products in original containers</li>
              <li>Never mix different cleaning products</li>
              <li>Use child-resistant locks on storage areas</li>
              <li>Ensure proper ventilation when using chemicals</li>
              <li>Read and follow all label instructions</li>
            </ul>
            
            <h4>Special Hazards:</h4>
            <ul>
              <li><strong>Button Batteries:</strong> Extremely dangerous if swallowed - store securely</li>
              <li><strong>Lead Paint:</strong> Have homes built before 1978 tested professionally</li>
              <li><strong>Carbon Monoxide:</strong> Install detectors and maintain fuel-burning appliances</li>
              <li><strong>Radon:</strong> Test your home and mitigate if necessary</li>
            </ul>
            
            <h4>Emergency Response:</h4>
            <ul>
              <li><strong>Poison Control:</strong> Call 1-800-222-1222 for poisoning emergencies</li>
              <li><strong>Keep Information Handy:</strong> Product labels, medical information</li>
              <li><strong>Know the Signs:</strong> Nausea, vomiting, confusion, difficulty breathing</li>
              <li><strong>Don't Induce Vomiting:</strong> Unless specifically instructed by poison control</li>
            </ul>
          `
        },
        {
          id: 4,
          title: 'Water Safety & Drowning Prevention',
          content: `
            <h3>Preventing Water-Related Accidents</h3>
            <p>Drowning is the leading cause of death for children ages 1-4. Children can drown in as little as 2 inches of water.</p>
            
            <h4>Pool and Spa Safety:</h4>
            <ul>
              <li><strong>Four-Sided Fencing:</strong> Install proper barriers around pools with self-closing, self-latching gates</li>
              <li><strong>Supervision:</strong> Maintain constant, undivided attention when children are near water</li>
              <li><strong>Pool Alarms:</strong> Install door and pool alarms for additional protection</li>
              <li><strong>Drain Safety:</strong> Ensure all drain covers are in place and functioning</li>
              <li><strong>Cover Properly:</strong> Secure hot tub and spa covers</li>
            </ul>
            
            <h4>Bathroom Safety:</h4>
            <ul>
              <li><strong>Never Leave Children Unattended:</strong> Stay within arm's reach during baths</li>
              <li><strong>Water Temperature:</strong> Test water temperature before bathing children</li>
              <li><strong>Remove Water:</strong> Empty tubs immediately after use</li>
              <li><strong>Toilet Locks:</strong> Use toilet locks for curious toddlers</li>
            </ul>
            
            <h4>General Water Hazards:</h4>
            <ul>
              <li>Empty all containers with standing water (buckets, kiddie pools)</li>
              <li>Cover or fence decorative ponds and water features</li>
              <li>Be cautious around natural water bodies</li>
              <li>Don't leave open coolers with melted ice unattended</li>
            </ul>
            
            <h4>Emergency Preparedness:</h4>
            <ul>
              <li>Learn CPR and water rescue techniques</li>
              <li>Keep rescue equipment near pools</li>
              <li>Post emergency numbers near water areas</li>
              <li>Ensure all family members know how to swim</li>
              <li>Never consume alcohol when supervising water activities</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(52, 211, 153, 0.1); border-radius: 6px;">
              <strong>Remember:</strong> Drowning is often silent. Active supervision means watching water activities as your primary activity.
            </div>
          `
        }
      ]
    },
    {
      id: 4,
      slug: 'abuse-signs',
      title: 'Signs Your Friend is in an Abusive Relationship',
      modules: [
        {
          id: 1,
          title: 'Understanding Relationship Abuse',
          content: `
            <h3>Recognizing the Difference: Unhealthy vs. Abusive</h3>
            <p>Understanding the signs of abuse can help you support friends who may be in dangerous situations. Abuse often starts subtly and escalates over time.</p>
            
            <h4>Types of Abuse:</h4>
            <ul>
              <li><strong>Physical:</strong> Hitting, slapping, pushing, restraining, or any unwanted physical contact</li>
              <li><strong>Emotional:</strong> Name-calling, constant criticism, humiliation, threats, intimidation</li>
              <li><strong>Financial:</strong> Controlling finances, preventing employment, hiding assets</li>
              <li><strong>Sexual:</strong> Any unwanted sexual activity, coercion, or sexual humiliation</li>
              <li><strong>Digital:</strong> Monitoring online activity, demanding passwords, cyberstalking</li>
            </ul>
            
            <h4>The Cycle of Abuse:</h4>
            <ul>
              <li><strong>Tension Building:</strong> Stress increases, victim feels like walking on eggshells</li>
              <li><strong>Incident:</strong> Verbal, emotional, or physical abuse occurs</li>
              <li><strong>Reconciliation:</strong> Abuser apologizes, makes promises, acts loving</li>
              <li><strong>Calm:</strong> Abuse stops, relationship seems normal, victim has hope</li>
            </ul>
            
            <h4>Why People Stay in Abusive Relationships:</h4>
            <ul>
              <li>Fear of escalated violence or threats</li>
              <li>Financial dependence</li>
              <li>Social isolation from support systems</li>
              <li>Cultural or religious beliefs</li>
              <li>Love for the partner and hope for change</li>
              <li>Low self-esteem from ongoing abuse</li>
              <li>Concern for children or pets</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(139, 92, 246, 0.1); border-radius: 6px;">
              <strong>Important:</strong> It can take up to seven attempts before someone permanently leaves an abusive partner.
            </div>
          `
        },
        {
          id: 2,
          title: 'Warning Signs to Watch For',
          content: `
            <h3>Identifying Red Flags in Your Friend's Relationship</h3>
            <p>47% of people have experienced psychological aggression by a partner. Recognizing warning signs early can help you provide appropriate support.</p>
            
            <h4>Social Isolation Signs:</h4>
            <ul>
              <li><strong>Sudden Changes:</strong> Your friend stops seeing friends and family</li>
              <li><strong>Partner Monopolizes Time:</strong> They spend all their time with their partner</li>
              <li><strong>Cancelled Plans:</strong> Frequent last-minute cancellations of social activities</li>
              <li><strong>Loss of Independence:</strong> Can't make decisions without partner's approval</li>
              <li><strong>Restricted Communication:</strong> Limited phone/text contact or partner monitors communications</li>
            </ul>
            
            <h4>Financial Control Indicators:</h4>
            <ul>
              <li>Partner controls all finances or gives strict allowances</li>
              <li>Prevented from working or forced to quit job</li>
              <li>No access to bank accounts or credit cards</li>
              <li>Partner hides financial information</li>
              <li>Not allowed to make purchases without permission</li>
            </ul>
            
            <h4>Emotional and Psychological Signs:</h4>
            <ul>
              <li><strong>Personality Changes:</strong> Becoming withdrawn, anxious, or fearful</li>
              <li><strong>Low Self-Esteem:</strong> Apologizing frequently, self-blame</li>
              <li><strong>Fear Response:</strong> Nervous about partner's reactions</li>
              <li><strong>Excusing Behavior:</strong> Making excuses for partner's actions</li>
              <li><strong>Walking on Eggshells:</strong> Constantly worried about upsetting partner</li>
            </ul>
            
            <h4>Physical Warning Signs:</h4>
            <ul>
              <li>Unexplained injuries or frequent "accidents"</li>
              <li>Wearing clothing to cover bruises or marks</li>
              <li>Partner accompanies them everywhere</li>
              <li>Flinching when touched or approached suddenly</li>
              <li>Changes in appearance (partner controls how they dress)</li>
            </ul>
          `
        },
        {
          id: 3,
          title: 'How to Approach and Support',
          content: `
            <h3>Starting Difficult Conversations with Compassion</h3>
            <p>Approaching someone about potential abuse requires sensitivity and patience. Your support can be crucial to their safety and wellbeing.</p>
            
            <h4>How to Start the Conversation:</h4>
            <ul>
              <li><strong>Express Love and Concern:</strong> Start by affirming your friendship and care</li>
              <li><strong>Choose the Right Time:</strong> Find a private, safe space when they're relaxed</li>
              <li><strong>Use "I" Statements:</strong> "I'm concerned about you" or "I've noticed changes"</li>
              <li><strong>Be Specific:</strong> Reference particular behaviors or incidents you've observed</li>
              <li><strong>Listen Without Judgment:</strong> Let them talk without interrupting or giving advice</li>
            </ul>
            
            <h4>What to Say:</h4>
            <ul>
              <li>"I care about you and I'm worried."</li>
              <li>"You don't deserve to be treated this way."</li>
              <li>"This isn't your fault."</li>
              <li>"I'm here for you no matter what you decide."</li>
              <li>"You know your situation best."</li>
            </ul>
            
            <h4>What NOT to Say:</h4>
            <ul>
              <li>"Just leave them" or "Why don't you just leave?"</li>
              <li>"I never liked your partner"</li>
              <li>"You're stupid for staying"</li>
              <li>"I would never put up with that"</li>
              <li>Anything that blames or judges their choices</li>
            </ul>
            
            <h4>If They Deny or Minimize:</h4>
            <ul>
              <li>Remain supportive and non-judgmental</li>
              <li>Let them know you're available when they're ready to talk</li>
              <li>Continue to be a consistent presence in their life</li>
              <li>Don't push or become confrontational</li>
              <li>Respect their timeline and decisions</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(52, 211, 153, 0.1); border-radius: 6px;">
              <strong>Remember:</strong> Stay calm and manage your own emotions. Your friend needs stability and support, not additional stress.
            </div>
          `
        },
        {
          id: 4,
          title: 'Resources and Safety Planning',
          content: `
            <h3>Providing Practical Support and Resources</h3>
            <p>Supporting someone in an abusive relationship often involves helping them access resources and develop safety plans.</p>
            
            <h4>Immediate Safety Resources:</h4>
            <ul>
              <li><strong>National Domestic Violence Hotline:</strong> 1-800-799-7233 (24/7, confidential)</li>
              <li><strong>Crisis Text Line:</strong> Text START to 88788</li>
              <li><strong>Local Law Enforcement:</strong> 911 for immediate danger</li>
              <li><strong>Local Domestic Violence Shelters:</strong> Research options in your area</li>
            </ul>
            
            <h4>Supporting Their Safety Planning:</h4>
            <ul>
              <li><strong>Important Documents:</strong> Help them safely store copies of ID, financial records, medical information</li>
              <li><strong>Emergency Bag:</strong> Clothes, medications, important papers, some cash</li>
              <li><strong>Safe Communication:</strong> Establish safe ways to stay in contact</li>
              <li><strong>Code Words:</strong> Develop signals for when they need help</li>
              <li><strong>Safe Places:</strong> Identify where they can go in an emergency</li>
            </ul>
            
            <h4>Long-term Support:</h4>
            <ul>
              <li><strong>Counseling Resources:</strong> Help them find specialized therapists</li>
              <li><strong>Legal Assistance:</strong> Information about restraining orders and legal rights</li>
              <li><strong>Financial Planning:</strong> Assistance with banking, employment, housing</li>
              <li><strong>Support Groups:</strong> Connect them with other survivors</li>
            </ul>
            
            <h4>Taking Care of Yourself:</h4>
            <ul>
              <li>Set boundaries about what support you can provide</li>
              <li>Seek support for yourself through counseling or support groups</li>
              <li>Don't try to rescue or fix the situation yourself</li>
              <li>Document concerning incidents (dates, descriptions)</li>
              <li>Know when to involve professionals or authorities</li>
            </ul>
            
            <h4>If They Decide to Leave:</h4>
            <ul>
              <li>The most dangerous time is often when leaving - extra precautions needed</li>
              <li>Help them develop a detailed safety plan</li>
              <li>Be available for immediate support</li>
              <li>Don't pressure them to leave before they're ready</li>
              <li>Support their decisions even if you disagree</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 123, 123, 0.1); border-radius: 6px;">
              <strong>Critical:</strong> Never confront the abuser directly - this can escalate danger for your friend.
            </div>
          `
        }
      ]
    },
    {
      id: 5,
      slug: 'suicide-awareness',
      title: 'Suicide Awareness',
      modules: [
        {
          id: 1,
          title: 'Understanding Suicide and Risk Factors',
          content: `
            <h3>Recognizing the Crisis</h3>
            <p>Suicide is a leading cause of death in the United States and a major public health concern. Understanding risk factors and warning signs can help save lives.</p>
            
            <h4>Key Statistics:</h4>
            <ul>
              <li>Suicide affects people of all backgrounds - there is no single cause</li>
              <li>It's the second leading cause of death for ages 10-34</li>
              <li>For every suicide death, there are approximately 25 attempts</li>
              <li>Most people who survive suicide attempts do not go on to die by suicide</li>
            </ul>
            
            <h4>Risk Factors:</h4>
            <ul>
              <li><strong>Mental Health Conditions:</strong> Depression, bipolar disorder, anxiety, PTSD</li>
              <li><strong>Substance Abuse:</strong> Alcohol or drug dependency</li>
              <li><strong>Previous Attempts:</strong> History of suicide attempts increases risk</li>
              <li><strong>Life Stressors:</strong> Job loss, divorce, death of loved one, financial problems</li>
              <li><strong>Social Isolation:</strong> Feeling disconnected from others</li>
              <li><strong>Chronic Illness:</strong> Serious physical health problems</li>
              <li><strong>Access to Means:</strong> Easy access to firearms or other lethal methods</li>
            </ul>
            
            <h4>Protective Factors:</h4>
            <ul>
              <li>Strong connections to family, friends, and community</li>
              <li>Access to mental health care and treatment</li>
              <li>Problem-solving skills and coping abilities</li>
              <li>Cultural or religious beliefs that discourage suicide</li>
              <li>Sense of purpose and meaning in life</li>
            </ul>
            
            <h4>Common Myths:</h4>
            <ul>
              <li><strong>Myth:</strong> Talking about suicide will give someone the idea</li>
              <li><strong>Truth:</strong> Talking about suicide can actually reduce the risk</li>
              <li><strong>Myth:</strong> People who talk about suicide won't actually do it</li>
              <li><strong>Truth:</strong> Most people who die by suicide have communicated their intent</li>
            </ul>
          `
        },
        {
          id: 2,
          title: 'Warning Signs and Crisis Recognition',
          content: `
            <h3>Identifying When Someone Needs Help</h3>
            <p>Recognizing warning signs can help you identify when someone is in crisis and needs immediate support.</p>
            
            <h4>Immediate Warning Signs (Seek Help Now):</h4>
            <ul>
              <li><strong>Talking about suicide:</strong> "I wish I were dead" or "I'm going to kill myself"</li>
              <li><strong>Seeking means:</strong> Looking for ways to die, such as searching online or acquiring weapons</li>
              <li><strong>Expressing hopelessness:</strong> "There's no way out" or "Nothing will ever get better"</li>
              <li><strong>Extreme mood swings:</strong> Sudden changes from depression to being unusually calm</li>
              <li><strong>Saying goodbye:</strong> Unexpected visits or calls to say goodbye</li>
            </ul>
            
            <h4>Other Serious Warning Signs:</h4>
            <ul>
              <li>Giving away possessions or making final arrangements</li>
              <li>Withdrawing from friends, family, and activities</li>
              <li>Increasing alcohol or drug use</li>
              <li>Dramatic personality changes</li>
              <li>Expressing feelings of being trapped or in unbearable pain</li>
              <li>Sleeping too much or too little</li>
              <li>Taking risks that could lead to death</li>
            </ul>
            
            <h4>Behavioral Changes to Watch:</h4>
            <ul>
              <li><strong>Academic or Work Performance:</strong> Sudden decline in performance</li>
              <li><strong>Appearance:</strong> Neglecting personal hygiene or appearance</li>
              <li><strong>Social Withdrawal:</strong> Isolating from usual social connections</li>
              <li><strong>Aggression:</strong> Increased irritability or violent behavior</li>
              <li><strong>Impulsivity:</strong> Acting without thinking about consequences</li>
            </ul>
            
            <h4>Verbal Clues:</h4>
            <ul>
              <li>"I can't go on like this"</li>
              <li>"Everyone would be better off without me"</li>
              <li>"I feel like there's no way out"</li>
              <li>"I'm tired of being a burden"</li>
              <li>"I just want the pain to stop"</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 123, 123, 0.1); border-radius: 6px;">
              <strong>Crisis Alert:</strong> If someone exhibits immediate warning signs, don't leave them alone. Get help immediately by calling 988 or 911.
            </div>
          `
        },
        {
          id: 3,
          title: 'How to Help Someone in Crisis',
          content: `
            <h3>Responding with Care and Compassion</h3>
            <p>Your response can make a life-saving difference. Knowing how to talk to someone in crisis is a crucial skill everyone should have.</p>
            
            <h4>What to Do:</h4>
            <ul>
              <li><strong>Take It Seriously:</strong> All suicide threats should be taken seriously</li>
              <li><strong>Listen Without Judgment:</strong> Let them express their feelings</li>
              <li><strong>Ask Directly:</strong> "Are you thinking about killing yourself?"</li>
              <li><strong>Stay Calm:</strong> Your calm presence can help them feel more stable</li>
              <li><strong>Show You Care:</strong> Express your concern and that you want to help</li>
            </ul>
            
            <h4>What to Say:</h4>
            <ul>
              <li>"I'm here for you and I want to help."</li>
              <li>"You're important to me and your life has value."</li>
              <li>"I may not understand exactly how you feel, but I care about you."</li>
              <li>"You are not alone in this. We can get through this together."</li>
              <li>"Let's talk about getting you some help."</li>
            </ul>
            
            <h4>What NOT to Say:</h4>
            <ul>
              <li>"You have so much to live for" (minimizes their pain)</li>
              <li>"Suicide is selfish" (adds guilt and shame)</li>
              <li>"Things could be worse" (dismisses their feelings)</li>
              <li>"Just think positive" (oversimplifies the problem)</li>
              <li>"I know exactly how you feel" (unless you've been in their situation)</li>
            </ul>
            
            <h4>Immediate Actions:</h4>
            <ul>
              <li><strong>Don't Leave Them Alone:</strong> Stay with them or ensure someone else can</li>
              <li><strong>Remove Means:</strong> Help remove access to firearms, pills, or other methods</li>
              <li><strong>Get Professional Help:</strong> Call 988, go to an emergency room, or call 911</li>
              <li><strong>Involve Others:</strong> Contact their family, friends, or support system (with permission)</li>
            </ul>
            
            <h4>Follow-Up Care:</h4>
            <ul>
              <li>Check in regularly after the crisis</li>
              <li>Help them connect with ongoing mental health treatment</li>
              <li>Continue to be supportive and available</li>
              <li>Learn about their treatment plan and how you can help</li>
              <li>Take care of your own emotional needs as well</li>
            </ul>
          `
        },
        {
          id: 4,
          title: 'Prevention and Resources',
          content: `
            <h3>Building Support Systems and Accessing Help</h3>
            <p>Suicide prevention is everyone's responsibility. Creating supportive communities and knowing available resources can save lives.</p>
            
            <h4>Crisis Resources (Available 24/7):</h4>
            <ul>
              <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
              <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              <li><strong>Emergency Services:</strong> Call 911 for immediate danger</li>
              <li><strong>National Suicide Prevention Lifeline Chat:</strong> 988lifeline.org</li>
            </ul>
            
            <h4>Specialized Resources:</h4>
            <ul>
              <li><strong>Veterans Crisis Line:</strong> 1-800-273-8255, Press 1</li>
              <li><strong>LGBT National Hotline:</strong> 1-888-843-4564</li>
              <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357</li>
              <li><strong>National Child Abuse Hotline:</strong> 1-800-4-A-CHILD</li>
            </ul>
            
            <h4>Creating Supportive Environments:</h4>
            <ul>
              <li><strong>Reduce Stigma:</strong> Talk openly about mental health</li>
              <li><strong>Learn the Signs:</strong> Educate yourself and others about warning signs</li>
              <li><strong>Be Available:</strong> Check in regularly with friends and family</li>
              <li><strong>Encourage Help-Seeking:</strong> Support professional mental health treatment</li>
              <li><strong>Restrict Access:</strong> Safely store firearms and medications</li>
            </ul>
            
            <h4>Long-term Prevention Strategies:</h4>
            <ul>
              <li>Promote mental health awareness in schools and workplaces</li>
              <li>Support policies that improve access to mental health care</li>
              <li>Encourage responsible media reporting on suicide</li>
              <li>Foster connectedness in communities</li>
              <li>Teach coping and problem-solving skills</li>
            </ul>
            
            <h4>Self-Care for Helpers:</h4>
            <ul>
              <li>Recognize your own limits and seek support</li>
              <li>Practice stress management techniques</li>
              <li>Connect with other supporters and professionals</li>
              <li>Know that you can't save everyone, but your efforts matter</li>
              <li>Celebrate the positive impact you make</li>
            </ul>
            
            <h4>If You're Struggling:</h4>
            <ul>
              <li>Reach out for help - it's a sign of strength, not weakness</li>
              <li>Call 988 or text for immediate support</li>
              <li>Talk to a trusted friend, family member, or mental health professional</li>
              <li>Remember that treatment works and recovery is possible</li>
              <li>You are not alone and your life has value</li>
            </ul>
            
            <div style="margin-top: 15px; padding: 10px; background: rgba(52, 211, 153, 0.1); border-radius: 6px;">
              <strong>Remember:</strong> If you or someone you know is in immediate danger, don't hesitate to call 911 or go to the nearest emergency room.
            </div>
          `
        }
      ]
    }
  ]
  }

  const resources = [
    {
      id: 'emergency',
      title: 'Emergency (US)',
      phone: '911',
      url: 'tel:911',
      description: 'Call 911 for immediate danger or life-threatening emergencies.',
      tags: ['emergency']
    },
    {
      id: 'suicide',
      title: '988 Suicide & Crisis Lifeline (US)',
      phone: '988',
      url: 'https://988lifeline.org',
      description: 'Call or text 988 for immediate support if someone is in crisis.',
      tags: ['suicide']
    },
    {
      id: 'domestic',
      title: 'National Domestic Violence Hotline (US)',
      phone: '1-800-799-7233',
      url: 'https://www.thehotline.org',
      description: 'Confidential support for domestic violence survivors.',
      tags: ['abuse','domestic']
    },
    {
      id: 'missing',
      title: 'National Missing and Unidentified Persons System (NamUs)',
      phone: '',
      url: 'https://www.namus.gov',
      description: 'Resource for reporting and finding missing persons in the US.',
      tags: ['missing']
    },
    {
      id: 'intl-samaritans',
      title: 'International Helplines (Befrienders Worldwide)',
      phone: '',
      url: 'https://www.befrienders.org/need-to-talk',
      description: 'Find local helplines worldwide for emotional support and crisis help.',
      tags: ['suicide','global']
    }
  ]

function renderResources(){
  const container = document.getElementById('resourcesList')
  if(!container) return
  container.innerHTML = ''
  resources.forEach(r=>{
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.className = 'resource-link'
    a.href = r.url || '#'
    a.target = '_blank'
    a.rel = 'noopener'
    a.innerHTML = `<strong>${r.title}</strong>`
    if(r.phone){
      const p = document.createElement('span')
      p.className = 'phone'
      p.textContent = r.phone
      a.appendChild(p)
    }
    const desc = document.createElement('div')
    desc.className = 'small'
    desc.textContent = r.description
    li.appendChild(a)
    li.appendChild(desc)
    container.appendChild(li)
  })
}

// YouTube functionality removed

// Persistence (localStorage key)
const STORAGE_KEY = 'lp_progress_v1'

function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }catch(e){return {}}
}
function saveProgress(p){ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)) }

let progress = loadProgress()

// UI Elements
const coursesList = document.getElementById('coursesList')
const courseHeader = document.getElementById('courseHeader')
const modulesContainer = document.getElementById('modulesContainer')
const moduleTemplate = document.getElementById('moduleTemplate')
const sectionTemplate = document.getElementById('sectionTemplate')

function renderCourses(){
  coursesList.innerHTML = ''
  data.courses.forEach(c => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = c.title
    a.href = '#'
    a.className = 'courseLink'
    a.addEventListener('click', (e)=>{e.preventDefault(); openCourse(c.id)})
    li.appendChild(a)
    coursesList.appendChild(li)
  })
}

function openCourse(courseId){
  const course = data.courses.find(x=>x.id===courseId)
  if(!course) return
  courseHeader.innerHTML = `<h2>${course.title}</h2><p class=\"small\">Select a module to view content. Complete quizzes to unlock next modules.</p>`
  renderCourseSections(course)
}

function renderCourseSections(course){
  modulesContainer.innerHTML = ''
  // Syllabus section
  const sylNode = sectionTemplate.content.cloneNode(true)
  const sylRoot = sylNode.querySelector('.section')
  const sylToggle = sylNode.querySelector('.sectionToggle')
  const sylTitle = sylNode.querySelector('.sectionTitle')
  const sylList = sylNode.querySelector('.sectionList')
  sylTitle.textContent = 'Syllabus'
  // sample syllabus item
  const sylLi = document.createElement('li')
  const meta = document.createElement('div')
  meta.className = 'fileMeta'
  meta.innerHTML = `<div class=\"fileTitle\">${course.title} Syllabus.pdf</div><div class=\"fileSub\">Syllabus</div>`
  const right = document.createElement('div')
  right.innerHTML = '<a class="resource-link" href="#">Download</a>'
  sylLi.appendChild(meta)
  sylLi.appendChild(right)
  sylList.appendChild(sylLi)
  sylToggle.addEventListener('click', ()=>{ sylRoot.classList.toggle('open') })
  modulesContainer.appendChild(sylNode)

  // Week / Module sections
  course.modules.forEach((m, idx)=>{
    const node = sectionTemplate.content.cloneNode(true)
    const root = node.querySelector('.section')
    const toggle = node.querySelector('.sectionToggle')
    const title = node.querySelector('.sectionTitle')
    const list = node.querySelector('.sectionList')

    title.textContent = `Week ${idx+1}: ${m.title}`

    // Create a slides / file item
    const slides = document.createElement('li')
    const slidesMeta = document.createElement('div')
    slidesMeta.className = 'fileMeta'
    slidesMeta.innerHTML = `<div class=\"fileTitle\">PowerPoint Slides</div><div class=\"fileSub\">${course.title} - Week ${idx+1}</div>`
    const slidesRight = document.createElement('div')
    slidesRight.innerHTML = '<a class="resource-link" href="#">PBH_250_3_Week_'+(idx+1)+'_Sync.pptx</a>'
    slides.appendChild(slidesMeta)
    slides.appendChild(slidesRight)
    list.appendChild(slides)

    // Create a quiz / participation item
    const quizLi = document.createElement('li')
    const quizMeta = document.createElement('div')
    quizMeta.className = 'fileMeta'
    quizMeta.innerHTML = `<div class=\"fileTitle\">Participation Poll</div><div class=\"fileSub\">Async (Week ${idx+1})</div>`
    const quizRight = document.createElement('div')
    const key = `${course.id}:${m.id}`
    const done = progress[key] && progress[key].completed
    const status = document.createElement('span')
    status.className = 'status ' + (done? 'check' : 'x')
    status.textContent = done ? '✔' : '✖'
    const takeBtn = document.createElement('button')
    takeBtn.textContent = 'Take Quiz'
    takeBtn.style.marginLeft = '10px'
    takeBtn.addEventListener('click', ()=>{
      // render quiz inline under this item
      // remove any existing inline quiz
      const existing = quizLi.querySelector('.inline-quiz')
      if(existing){ existing.remove(); return }
      const holder = document.createElement('div')
      holder.className = 'inline-quiz'
      holder.style.marginTop = '8px'
      // reuse renderQuiz to populate holder
      renderQuiz(holder, course, m, idx)
      quizLi.appendChild(holder)
    })
    quizRight.appendChild(status)
    quizRight.appendChild(takeBtn)
    quizLi.appendChild(quizMeta)
    quizLi.appendChild(quizRight)
    list.appendChild(quizLi)

    toggle.addEventListener('click', ()=>{ root.classList.toggle('open') })
    modulesContainer.appendChild(node)
  })
}

function isLocked(course, module, index){
  // first module unlocked by default
  if(index===0) return false
  // previous module must be completed
  const prevKey = `${course.id}:${course.modules[index-1].id}`
  return !(progress[prevKey] && progress[prevKey].completed)
}

function renderQuiz(container, course, module, index){
  container.innerHTML = ''
  const hasQuestions = module.quizQuestions && module.quizQuestions.length > 0
  const quiz = document.createElement('div')
  quiz.className = 'quiz'

  if(!hasQuestions){
    // Quiz empty for now — show a small placeholder
    const placeholder = document.createElement('div')
    placeholder.className = 'small'
    placeholder.textContent = 'Quiz coming soon.'
    quiz.appendChild(placeholder)
    container.appendChild(quiz)
    return
  }

  const q = document.createElement('div')
  q.className = 'question'
  q.innerHTML = `<strong>${module.quizQuestions[0].prompt}</strong>`
  quiz.appendChild(q)

  const choices = module.quizQuestions[0].choices

  choices.forEach(c =>{
    const label = document.createElement('label')
    label.className = 'choice'
    const input = document.createElement('input')
    input.type = 'radio'
    input.name = `quiz_${course.id}_${module.id}`
    input.value = c.id
    label.appendChild(input)
    label.appendChild(document.createTextNode(' ' + c.text))
    quiz.appendChild(label)
  })

  const submit = document.createElement('button')
  submit.textContent = 'Submit Quiz'
  submit.addEventListener('click', ()=>{
    const sel = document.querySelector(`input[name=quiz_${course.id}_${module.id}]:checked`)
    if(!sel){ alert('Please choose an answer.'); return }
    // check against module.quizQuestions[0].answer
    if(sel.value===module.quizQuestions[0].answer){
      alert('Correct! Module marked complete and next unlocked.')
      const key = `${course.id}:${module.id}`
      progress[key] = { completed: true }
      saveProgress(progress)
      // refresh the current view (course list or module page)
      handleRoute()
    } else {
      alert('Not quite. Review the module and try again.')
    }
  })

  quiz.appendChild(submit)
  container.appendChild(quiz)
}

// initial render
// initial render: show all courses as centered dropdowns
function renderAllCourses(){
  // Render each course as its own centered purple dropdown card
  modulesContainer.innerHTML = ''
  data.courses.forEach(course => {
    const card = document.createElement('div')
    card.className = 'courseCard'

    const header = document.createElement('div')
    header.className = 'courseHeader'
    header.innerHTML = `<div>${course.title}</div><div class="chev">▾</div>`
    card.appendChild(header)

    const body = document.createElement('div')
    body.className = 'sectionBody'
    body.style.display = 'none'
    // Render module rows for every course (syllabus will have its single module)
    if(course.modules && course.modules.length > 0){
      const ul = document.createElement('ul')
      ul.className = 'modulesList'
      course.modules.forEach((m, idx)=>{
        const li = document.createElement('li')
        li.className = 'moduleRow'
        const meta = document.createElement('div')
        meta.className = 'fileMeta'
        meta.innerHTML = `<div class=\"fileTitle\"><a href=\"#/courses/${course.id}/modules/${m.id}\" class=\"moduleLink\">${m.title}</a></div><div class=\"fileSub\">Module ${idx + 1}</div>`
        li.appendChild(meta)
        ul.appendChild(li)
      })
      body.appendChild(ul)
    } else {
      body.innerHTML = '<div class="emptyPlaceholder">No modules yet.</div>'
    }
    card.appendChild(body)

    header.addEventListener('click', ()=>{
      if(body.style.display === 'none'){
        body.style.display = 'block'
        header.querySelector('.chev').textContent = '▴'
        header.classList.add('open')
      } else {
        body.style.display = 'none'
        header.querySelector('.chev').textContent = '▾'
        header.classList.remove('open')
      }
    })

    modulesContainer.appendChild(card)
  })
}

// render resources and courses
// render the single Syllabus view and the resources sidebar
// routing: if hash points to a module, render it; otherwise show syllabus view
function parseHash(){
  const h = location.hash || ''
  const m = h.match(/^#\/courses\/(\d+)\/modules\/(\d+)/)
  if(m) return { courseId: Number(m[1]), moduleId: Number(m[2]) }
  return null
}

function renderModulePage(courseId, moduleId){
  const course = data.courses.find(c=>c.id===courseId)
  if(!course) return renderAllCourses()
  const module = course.modules.find(mm=>mm.id===moduleId)
  if(!module) return renderAllCourses()

  modulesContainer.innerHTML = ''
  const card = document.createElement('div')
  card.className = 'courseCard'
    const header = document.createElement('div')
    // Use module page header style: plain, left-aligned title and smaller module subtitle
    header.className = 'courseHeader modulePageHeader'
    header.innerHTML = `
      <div class="modulePageTitle">
        <div class="courseTitle">${course.title}</div>
        <div class="moduleSubtitle">${module.title}</div>
      </div>
    `
  card.appendChild(header)

  const content = document.createElement('div')
  content.style.padding = '12px 0'
  // If this is the Syllabus module, show a generated course breakdown
  if(course.id === 0 && module.title && module.title.toLowerCase().includes('syllabus')){
    let html = '<h3>Course breakdown</h3>'
    html += '<p class="small">Below is an overview of all courses and their modules.</p>'
    html += '<ul class="small">'
    data.courses.forEach(c => {
      html += `<li style="margin:8px 0;"><strong>${c.title}</strong><ul style=\"margin:6px 0 0 12px;\">`
      c.modules.forEach(m => {
        html += `<li>${m.title}</li>`
      })
      html += '</ul></li>'
    })
    html += '</ul>'
    content.innerHTML = html
  } else {
    // Show module content
    content.innerHTML = module.content || ''
  }
  card.appendChild(content)

  // Video functionality removed

  const back = document.createElement('button')
  back.className = 'backBtn'
  back.textContent = 'Home'
  back.addEventListener('click', ()=>{ location.hash = ''; renderAllCourses() })
  card.appendChild(back)

  const nextModuleIndex = course.modules.findIndex(m=>m.id===moduleId)+1
  if(nextModuleIndex < course.modules.length){
    const nextBtn = document.createElement('button')
    nextBtn.className = 'backBtn'
    nextBtn.textContent = 'Next Module'
    nextBtn.addEventListener('click', ()=>{
      const nextModule = course.modules[nextModuleIndex]
      location.hash = `#/courses/${course.id}/modules/${nextModule.id}`
    })
    card.appendChild(nextBtn)
  }

  modulesContainer.appendChild(card)
}

function handleRoute(){
  const parsed = parseHash()
  if(parsed){ renderModulePage(parsed.courseId, parsed.moduleId); return }
  renderAllCourses()
}

// initial render
handleRoute()
renderResources()

window.addEventListener('hashchange', handleRoute)

// Expose to window for debugging
window._LP = { data, progress }
