
import React from 'react';

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { VerticalFeatures } from '@/components/VerticalFeatures';

export default async function Dashboard(){
    return (
        
        <div className='w-full items-center'>
            <nav className="w-full justify-center border-b border-b-foreground/10 h-16 ">
                <NavigationBar/>
            </nav>
            
        </div>
        
    
      );

  
  
};


