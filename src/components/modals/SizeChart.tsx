"use client";
import React from "react";

export default function SizeChartModal() {

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto relative">
     

      <h2 className="text-2xl font-bold mb-4">Size Chart</h2>

     
      <h3 className="text-lg font-semibold mb-2">Dress Size - Regular (Inches)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">UK</th>
              <th className="border p-2">EU</th>
              <th className="border p-2">US</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">Bust</th>
              <th className="border p-2">Waist</th>
              <th className="border p-2">Hip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">6</td>
              <td className="border p-2">34</td>
              <td className="border p-2">2</td>
              <td className="border p-2">S</td>
              <td className="border p-2">34.2</td>
              <td className="border p-2">24.4</td>
              <td className="border p-2">38.1</td>
            </tr>
            <tr>
              <td className="border p-2">8</td>
              <td className="border p-2">36</td>
              <td className="border p-2">4</td>
              <td className="border p-2">S</td>
              <td className="border p-2">36.2</td>
              <td className="border p-2">26.3</td>
              <td className="border p-2">40.1</td>
            </tr>
            
          </tbody>
        </table>
      </div>

     
      <h3 className="text-lg font-semibold mb-2">Dress Size - Curvy (Inches)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Size</th>
              <th className="border p-2">Bust</th>
              <th className="border p-2">Waist</th>
              <th className="border p-2">Hip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">XS</td>
              <td className="border p-2">35</td>
              <td className="border p-2">24</td>
              <td className="border p-2">40</td>
            </tr>
            <tr>
              <td className="border p-2">S</td>
              <td className="border p-2">37.4</td>
              <td className="border p-2">26</td>
              <td className="border p-2">42</td>
            </tr>
           
          </tbody>
        </table>
      </div>

     
      <h3 className="text-lg font-semibold mb-2">Pants - Regular (Inches)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Size</th>
              <th className="border p-2">Waist</th>
              <th className="border p-2">Hip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">XS (6)</td>
              <td className="border p-2">22</td>
              <td className="border p-2">35</td>
            </tr>
            <tr>
              <td className="border p-2">S (8)</td>
              <td className="border p-2">24</td>
              <td className="border p-2">37</td>
            </tr>
           
          </tbody>
        </table>
      </div>

     
      <h3 className="text-lg font-semibold mb-2">Corseted Blouses - Regular</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">UK</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">Bust</th>
              <th className="border p-2">Waist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">6</td>
              <td className="border p-2">XS</td>
              <td className="border p-2">32</td>
              <td className="border p-2">23</td>
            </tr>
            <tr>
              <td className="border p-2">8</td>
              <td className="border p-2">S</td>
              <td className="border p-2">34</td>
              <td className="border p-2">26</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
}
