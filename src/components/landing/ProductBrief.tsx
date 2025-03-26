import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Edit2, Check, X } from 'lucide-react';

interface ProductBriefProps {
  brief: any | null;
}

const ProductBrief = ({ brief }: ProductBriefProps) => {
  const [editedBrief, setEditedBrief] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Initialize edited brief when a new brief is received
  React.useEffect(() => {
    if (brief) {
      setEditedBrief(JSON.parse(JSON.stringify(brief)));
    }
  }, [brief]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedBrief(JSON.parse(JSON.stringify(brief)));
    setIsEditing(false);
  };

  const handleChange = (path: string[], value: any) => {
    setEditedBrief((prev: any) => {
      const newBrief = JSON.parse(JSON.stringify(prev));
      let current = newBrief;
      
      // Navigate to the nested property
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        }
        current = current[path[i]];
      }
      
      // Set the value
      current[path[path.length - 1]] = value;
      return newBrief;
    });
  };

  // Helper function to safely render values
  const renderValue = (value: any): React.ReactNode => {
    if (value === null || value === undefined) {
      return 'Not specified';
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
      return 'Complex data';
    }
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return String(value);
  };

  const displayBrief = isEditing ? editedBrief : brief;

  if (!displayBrief) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center glass-card rounded-2xl border border-beauty-100">
        <div className="w-16 h-16 rounded-full bg-beauty-50 flex items-center justify-center mb-4">
          <span className="text-beauty-500 font-display text-2xl">✧</span>
        </div>
        <h3 className="text-lg font-display font-medium text-beauty-900 mb-2">No Product Brief Yet</h3>
        <p className="text-sm text-beauty-600 max-w-xs">
          Start by describing your beauty product in the chat. 
          Include details about ingredients, benefits, and your target market.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full glass-card rounded-2xl border border-beauty-100 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-beauty-100 bg-beauty-50/50 flex items-center justify-between">
        <h2 className="text-sm font-medium text-beauty-900">Product Brief</h2>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSave}
                className="h-8 px-3 text-green-600"
              >
                <Check className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCancel}
                className="h-8 px-3 text-red-600"
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
            </>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleEditToggle}
              className="h-8 px-3"
            >
              <Edit2 className="h-4 w-4 mr-1" />
              Edit
            </Button>
          )}
          <span className="text-xs px-2 py-1 rounded-full bg-beauty-700 text-white">
            {displayBrief.productCategory || displayBrief.category || 'Beauty Product'}
          </span>
        </div>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-6">
            {isEditing ? (
              <Input 
                className="text-2xl md:text-3xl font-display font-medium text-beauty-900 mb-2 text-center"
                value={displayBrief.productName || displayBrief.product_name || ''}
                onChange={(e) => handleChange(['productName'], e.target.value)}
              />
            ) : (
              <h1 className="text-2xl md:text-3xl font-display font-medium text-beauty-900 mb-2">
                {displayBrief.productName || displayBrief.product_name || 'Untitled Product'}
              </h1>
            )}
            {isEditing ? (
              <Input 
                className="text-sm text-beauty-600 text-center"
                value={displayBrief.tagline || ''}
                onChange={(e) => handleChange(['tagline'], e.target.value)}
                placeholder="Add a tagline"
              />
            ) : (
              <p className="text-sm text-beauty-600">{displayBrief.tagline || 'No tagline'}</p>
            )}
          </div>

          {/* Product Overview */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Overview</h2>
            <div className="bg-white rounded-lg p-4 border border-beauty-100">
              {isEditing ? (
                <Textarea 
                  className="text-sm text-beauty-800 leading-relaxed"
                  value={displayBrief.overview || ''}
                  onChange={(e) => handleChange(['overview'], e.target.value)}
                  rows={4}
                />
              ) : (
                <p className="text-sm text-beauty-800 leading-relaxed">{displayBrief.overview || 'No overview provided'}</p>
              )}
            </div>
          </section>

          {/* Manufacturing Requirements */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Manufacturing Requirements</h2>
            <div className="bg-white rounded-lg p-4 border border-beauty-100">
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <h3 className="text-xs text-beauty-600 mb-1">Formula Type</h3>
                  {isEditing ? (
                    <Input
                      value={displayBrief.manufacturing?.formulaType || 
                            displayBrief.manufacturing_requirements?.formula_type || 
                            ''}
                      onChange={(e) => handleChange(['manufacturing', 'formulaType'], e.target.value)}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-beauty-800">
                      {displayBrief.manufacturing?.formulaType || 
                       displayBrief.manufacturing_requirements?.formula_type || 
                       'Not specified'}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="text-xs text-beauty-600 mb-1">Product Form</h3>
                  {isEditing ? (
                    <Input
                      value={displayBrief.manufacturing?.productForm || 
                            displayBrief.manufacturing_requirements?.product_form || 
                            ''}
                      onChange={(e) => handleChange(['manufacturing', 'productForm'], e.target.value)}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-beauty-800">
                      {displayBrief.manufacturing?.productForm || 
                       displayBrief.manufacturing_requirements?.product_form || 
                       'Not specified'}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-xs text-beauty-600 mb-1">Special Requirements</h3>
                {isEditing ? (
                  <Textarea
                    value={displayBrief.manufacturing?.specialRequirements || 
                          displayBrief.manufacturing_requirements?.special_requirements || 
                          ''}
                    onChange={(e) => handleChange(['manufacturing', 'specialRequirements'], e.target.value)}
                    className="text-sm"
                    rows={2}
                  />
                ) : (
                  <p className="text-sm text-beauty-800">
                    {displayBrief.manufacturing?.specialRequirements || 
                     displayBrief.manufacturing_requirements?.special_requirements || 
                     'Not specified'}
                  </p>
                )}
              </div>
              
              {/* New Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs text-beauty-600 mb-1">MOQ</h3>
                  {isEditing ? (
                    <Input
                      type="number"
                      value={displayBrief.moq || ''}
                      onChange={(e) => handleChange(['moq'], parseInt(e.target.value) || '')}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-beauty-800">
                      {displayBrief.moq || 'Not specified'}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="text-xs text-beauty-600 mb-1">Vendor Location</h3>
                  {isEditing ? (
                    <Input
                      value={displayBrief.vendorLocation || ''}
                      onChange={(e) => handleChange(['vendorLocation'], e.target.value)}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-beauty-800">
                      {displayBrief.vendorLocation || 'Not specified'}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-3">
                <h3 className="text-xs text-beauty-600 mb-1">Manufacturing Capability</h3>
                {isEditing ? (
                  <Textarea
                    value={displayBrief.capability || ''}
                    onChange={(e) => handleChange(['capability'], e.target.value)}
                    className="text-sm"
                    rows={2}
                  />
                ) : (
                  <p className="text-sm text-beauty-800">
                    {displayBrief.capability || 'Not specified'}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Target Market */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Target Market</h2>
            <div className="bg-white rounded-lg p-4 border border-beauty-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs text-beauty-600 mb-1">Demographics</h3>
                  {isEditing ? (
                    <Input
                      value={typeof displayBrief.targetMarket?.demographics === 'string' 
                        ? displayBrief.targetMarket.demographics 
                        : typeof displayBrief.target_market?.demographics === 'string'
                          ? displayBrief.target_market.demographics
                          : ''}
                      onChange={(e) => handleChange(['targetMarket', 'demographics'], e.target.value)}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-beauty-800">
                      {typeof displayBrief.targetMarket?.demographics === 'string' 
                        ? displayBrief.targetMarket.demographics 
                        : typeof displayBrief.target_market?.demographics === 'string'
                          ? displayBrief.target_market.demographics
                          : 'Not specified'}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="text-xs text-beauty-600 mb-1">Age Range</h3>
                  {isEditing ? (
                    <Input
                      value={typeof displayBrief.targetMarket?.ageRange === 'string' 
                        ? displayBrief.targetMarket.ageRange 
                        : typeof displayBrief.target_market?.age_range === 'string'
                          ? displayBrief.target_market.age_range
                          : ''}
                      onChange={(e) => handleChange(['targetMarket', 'ageRange'], e.target.value)}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-beauty-800">
                      {typeof displayBrief.targetMarket?.ageRange === 'string' 
                        ? displayBrief.targetMarket.ageRange 
                        : typeof displayBrief.target_market?.age_range === 'string'
                          ? displayBrief.target_market.age_range
                          : 'Not specified'}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-xs text-beauty-600 mb-1">Pain Points</h3>
                {isEditing ? (
                  <Textarea
                    value={Array.isArray(displayBrief.targetMarket?.painPoints) 
                      ? displayBrief.targetMarket.painPoints.join(', ')
                      : Array.isArray(displayBrief.target_market?.pain_points) 
                        ? displayBrief.target_market.pain_points.join(', ')
                        : typeof displayBrief.targetMarket?.painPoints === 'string' 
                          ? displayBrief.targetMarket.painPoints 
                          : typeof displayBrief.target_market?.pain_points === 'string'
                            ? displayBrief.target_market.pain_points
                            : ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Split by comma and trim spaces
                      const painPoints = value ? value.split(',').map(item => item.trim()) : [];
                      handleChange(['targetMarket', 'painPoints'], painPoints);
                    }}
                    className="text-sm"
                    rows={2}
                  />
                ) : (
                  <p className="text-sm text-beauty-800">
                    {Array.isArray(displayBrief.targetMarket?.painPoints) 
                      ? displayBrief.targetMarket.painPoints.join(', ')
                      : Array.isArray(displayBrief.target_market?.pain_points) 
                        ? displayBrief.target_market.pain_points.join(', ')
                        : typeof displayBrief.targetMarket?.painPoints === 'string' 
                          ? displayBrief.targetMarket.painPoints 
                          : typeof displayBrief.target_market?.pain_points === 'string'
                            ? displayBrief.target_market.pain_points
                            : 'Not specified'}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Key Ingredients */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Key Ingredients</h2>
            <div className="bg-white rounded-lg p-4 border border-beauty-100">
              {isEditing ? (
                <div className="space-y-3">
                  {(displayBrief.ingredients || displayBrief.key_ingredients || []).map((ingredient: any, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-2">
                      <Input
                        value={ingredient.name || ingredient.ingredient || ''}
                        onChange={(e) => {
                          const newIngredients = [...(displayBrief.ingredients || displayBrief.key_ingredients)];
                          newIngredients[index] = {
                            ...newIngredients[index],
                            name: e.target.value
                          };
                          handleChange(['ingredients'], newIngredients);
                        }}
                        placeholder="Ingredient name"
                        className="text-sm"
                      />
                      <Input
                        value={ingredient.benefit || ingredient.benefits || ''}
                        onChange={(e) => {
                          const newIngredients = [...(displayBrief.ingredients || displayBrief.key_ingredients)];
                          newIngredients[index] = {
                            ...newIngredients[index],
                            benefit: e.target.value
                          };
                          handleChange(['ingredients'], newIngredients);
                        }}
                        placeholder="Benefits"
                        className="text-sm"
                      />
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2"
                    onClick={() => {
                      const currentIngredients = displayBrief.ingredients || displayBrief.key_ingredients || [];
                      handleChange(['ingredients'], [
                        ...currentIngredients,
                        { name: '', benefit: '' }
                      ]);
                    }}
                  >
                    Add Ingredient
                  </Button>
                </div>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(displayBrief.ingredients || displayBrief.key_ingredients || []).map((ingredient: any, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-beauty-100 text-beauty-600 flex items-center justify-center text-xs flex-shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <span className="text-sm font-medium text-beauty-800">
                          {ingredient.name || ingredient.ingredient || 'Unnamed Ingredient'}
                        </span>
                        <p className="text-xs text-beauty-600">
                          {ingredient.benefit || ingredient.benefits || 'No benefits listed'}
                        </p>
                      </div>
                    </li>
                  ))}
                  {(displayBrief.ingredients || displayBrief.key_ingredients || []).length === 0 && (
                    <li className="text-sm text-beauty-600">No ingredients specified</li>
                  )}
                </ul>
              )}
            </div>
          </section>

          {/* Claims & Benefits */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Claims & Benefits</h2>
            <div className="bg-white rounded-lg p-4 border border-beauty-100">
              {isEditing ? (
                <Textarea
                  value={(displayBrief.benefits || displayBrief.product_claims || []).join('\n')}
                  onChange={(e) => {
                    const benefitsArray = e.target.value
                      .split('\n')
                      .map(line => line.trim())
                      .filter(line => line.length > 0);
                    handleChange(['benefits'], benefitsArray);
                  }}
                  placeholder="Enter benefits (one per line)"
                  rows={4}
                  className="text-sm"
                />
              ) : (
                <ul className="space-y-2">
                  {(displayBrief.benefits || displayBrief.product_claims || []).map((benefit: string, index: number) => (
                    <li key={index} className="text-sm text-beauty-800 flex items-start gap-2">
                      <span className="text-beauty-500">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                  {(displayBrief.benefits || displayBrief.product_claims || []).length === 0 && (
                    <li className="text-sm text-beauty-600">No benefits specified</li>
                  )}
                </ul>
              )}
            </div>
          </section>

          {/* Packaging & Branding */}
          {(displayBrief.packaging || displayBrief.packaging?.type) && (
            <section>
              <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Packaging & Branding</h2>
              <div className="bg-white rounded-lg p-4 border border-beauty-100">
                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xs text-beauty-600 mb-1">Type</h3>
                      <Input
                        value={typeof displayBrief.packaging === 'object' ? displayBrief.packaging.type || '' : ''}
                        onChange={(e) => handleChange(['packaging', 'type'], e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs text-beauty-600 mb-1">Size</h3>
                      <Input
                        value={typeof displayBrief.packaging === 'object' ? displayBrief.packaging.size || '' : ''}
                        onChange={(e) => handleChange(['packaging', 'size'], e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs text-beauty-600 mb-1">Branding Suggestions</h3>
                      <Textarea
                        value={typeof displayBrief.packaging === 'object' ? displayBrief.packaging.branding_suggestions || displayBrief.packaging.brandingSuggestions || '' : ''}
                        onChange={(e) => handleChange(['packaging', 'brandingSuggestions'], e.target.value)}
                        className="text-sm"
                        rows={3}
                      />
                    </div>
                  </div>
                ) : (
                  typeof displayBrief.packaging === 'string' ? (
                    <p className="text-sm text-beauty-800 leading-relaxed">{displayBrief.packaging}</p>
                  ) : displayBrief.packaging && typeof displayBrief.packaging === 'object' ? (
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xs text-beauty-600 mb-1">Type</h3>
                        <p className="text-sm text-beauty-800">{displayBrief.packaging.type || 'Not specified'}</p>
                      </div>
                      {(displayBrief.packaging.size || displayBrief.packaging.size === '') && (
                        <div>
                          <h3 className="text-xs text-beauty-600 mb-1">Size</h3>
                          <p className="text-sm text-beauty-800">{displayBrief.packaging.size || 'Not specified'}</p>
                        </div>
                      )}
                      {(displayBrief.packaging.branding_suggestions || displayBrief.packaging.brandingSuggestions) && (
                        <div>
                          <h3 className="text-xs text-beauty-600 mb-1">Branding Suggestions</h3>
                          <p className="text-sm text-beauty-800">{displayBrief.packaging.branding_suggestions || displayBrief.packaging.brandingSuggestions}</p>
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </section>
          )}

          {/* Price Point */}
          {(displayBrief.pricing || displayBrief.price_point) && (
            <section>
              <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Price Point</h2>
              <div className="bg-white rounded-lg p-4 border border-beauty-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xs text-beauty-600 mb-1">Target Retail Price</h3>
                    {isEditing ? (
                      <Input
                        value={displayBrief.pricing?.targetRetailPrice || 
                              displayBrief.price_point?.retail_price || 
                              (typeof displayBrief.price_point === 'string' ? displayBrief.price_point : '')}
                        onChange={(e) => handleChange(['pricing', 'targetRetailPrice'], e.target.value)}
                        className="text-sm"
                      />
                    ) : (
                      <p className="text-sm text-beauty-800">
                        {displayBrief.pricing?.targetRetailPrice || 
                         displayBrief.price_point?.retail_price || 
                         (typeof displayBrief.price_point === 'string' ? displayBrief.price_point : 'Not specified')}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs text-beauty-600 mb-1">Market Positioning</h3>
                    {isEditing ? (
                      <Input
                        value={displayBrief.pricing?.marketPositioning || 
                              displayBrief.price_point?.market_positioning || 
                              ''}
                        onChange={(e) => handleChange(['pricing', 'marketPositioning'], e.target.value)}
                        className="text-sm"
                      />
                    ) : (
                      <p className="text-sm text-beauty-800">
                        {displayBrief.pricing?.marketPositioning || 
                         displayBrief.price_point?.market_positioning || 
                         'Not specified'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Regulatory & Compliance */}
          {(displayBrief.regulatory || displayBrief.regulatory_considerations) && (
            <section>
              <h2 className="text-sm uppercase tracking-wider text-beauty-500 font-medium mb-3">Regulatory & Compliance</h2>
              <div className="bg-white rounded-lg p-4 border border-beauty-100">
                {isEditing ? (
                  <Textarea
                    value={typeof displayBrief.regulatory === 'string' 
                      ? displayBrief.regulatory 
                      : Array.isArray(displayBrief.regulatory_considerations) 
                        ? displayBrief.regulatory_considerations.join('\n')
                        : ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (Array.isArray(displayBrief.regulatory_considerations)) {
                        // Split by newline and trim spaces
                        const regulatoryArray = value
                          .split('\n')
                          .map(line => line.trim())
                          .filter(line => line.length > 0);
                        handleChange(['regulatory_considerations'], regulatoryArray);
                      } else {
                        handleChange(['regulatory'], value);
                      }
                    }}
                    className="text-sm"
                    rows={4}
                  />
                ) : (
                  typeof displayBrief.regulatory === 'string' ? (
                    <p className="text-sm text-beauty-800 leading-relaxed">{displayBrief.regulatory}</p>
                  ) : Array.isArray(displayBrief.regulatory_considerations) ? (
                    <ul className="space-y-2">
                      {displayBrief.regulatory_considerations.map((item: string, index: number) => (
                        <li key={index} className="text-sm text-beauty-800 flex items-start gap-2">
                          <span className="text-beauty-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-beauty-600">No regulatory information specified</p>
                  )
                )}
              </div>
            </section>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProductBrief;
