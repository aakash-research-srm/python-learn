import { ModuleContent, PythonPlayground } from "@/components/module-content";
import { CodeExample } from "@/components/code-example";
import { Quiz } from "@/components/quiz";
import { quizData } from "@/lib/quiz-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NumpyPandasPage = () => {
  return (
    <ModuleContent title="NumPy & Pandas">
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NumPy - Numerical Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              NumPy is the fundamental package for scientific computing in
              Python. It provides support for large, multi-dimensional arrays
              and matrices, along with mathematical functions to operate on
              them.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Key Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• N-dimensional array objects</li>
                  <li>• Broadcasting functions</li>
                  <li>• Mathematical operations</li>
                  <li>• Linear algebra functions</li>
                  <li>• Random number generation</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Array Operations</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">reshape()</Badge> Change array
                    shape
                  </li>
                  <li>
                    <Badge variant="outline">sum()</Badge> Calculate sum
                  </li>
                  <li>
                    <Badge variant="outline">mean()</Badge> Calculate average
                  </li>
                  <li>
                    <Badge variant="outline">max()</Badge> Find maximum
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live code: NumPy */}
        <CodeExample
          title="NumPy"
          code={`import numpy as np\narr = np.array([1, 2, 3])\nprint(arr * 2)`}
          language="python"
          codeOutput={`[2 4 6]`}
        />
        {/* Student code: NumPy */}
        <PythonPlayground
          initialCode={`import numpy as np\nnumbers = np.array([10, 20, 30])\nprint(numbers + 5)`}
        />

        {/* Student Practice: NumPy */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NumPy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground">
              <strong>Tips:</strong>
              <ul className="list-disc ml-6">
                <li>
                  Use <code>np.array()</code> to create arrays.
                </li>
                <li>Access elements by index (starts at 0).</li>
                <li>
                  Use <code>np.sum()</code>, <code>np.mean()</code>, etc. for
                  calculations.
                </li>
                <li>Arrays can be 1D or 2D.</li>
              </ul>
            </div>
            <PythonPlayground
              initialCode={`import numpy as np\n\n# 1. Create a 1D array of 3 numbers and print the second number\narr = np.array([_____, _____, _____])\nprint(arr[1])\n\n# 2. Create a 2D array and print its shape\nmatrix = np.array([[_____, _____], [_____, _____]])\nprint(matrix.shape)\n\n# 3. Find the sum and mean of the array\nprint(np.sum(arr))\nprint(np.mean(arr))`}
            />
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pandas - Data Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Pandas is a powerful data manipulation and analysis library. It
              provides data structures like DataFrames and Series, making it
              easy to work with structured data.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">
                  Core Data Structures
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Series</Badge> 1D labeled array
                  </li>
                  <li>
                    <Badge variant="outline">DataFrame</Badge> 2D labeled data
                    structure
                  </li>
                  <li>
                    <Badge variant="outline">Index</Badge> Axis labels
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">Key Operations</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Data loading and saving</li>
                  <li>• Data cleaning and transformation</li>
                  <li>• Grouping and aggregation</li>
                  <li>• Merging and joining</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live code: Pandas */}
        <CodeExample
          title="Pandas"
          code={`import pandas as pd\ndata = {"Name": ["Asha", "Vikram"], "Marks": [85, 90]}\ndf = pd.DataFrame(data)\nprint(df)`}
          language="python"
          codeOutput={`     Name  Marks\n0    Asha     85\n1  Vikram     90`}
        />
        {/* Student code: Pandas */}
        <PythonPlayground
          initialCode={`import pandas as pd\ndata = {"City": ["Chennai", "Delhi"], "Population": [80, 100]}\ndf = pd.DataFrame(data)\nprint(df)`}
        />

        {/* Student Practice: Pandas */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pandas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground">
              <strong>Tips:</strong>
              <ul className="list-disc ml-6">
                <li>
                  Use <code>pd.DataFrame()</code> to create tables.
                </li>
                <li>
                  Access columns with <code>df['column']</code>.
                </li>
                <li>
                  Use <code>df.head()</code> to see first rows.
                </li>
                <li>Filter data with conditions.</li>
              </ul>
            </div>
            <PythonPlayground
              initialCode={`import pandas as pd\n\n# 1. Create a DataFrame for 2 students with Name and Age\ndata = {"Name": ["_____", "_____"], "Age": [_____, _____]}\ndf = pd.DataFrame(data)\nprint(df)\n\n# 2. Print the names column\nprint(df["Name"])\n\n# 3. Add a new column 'Score' and print the DataFrame\ndf["Score"] = [_____, _____]\nprint(df)`}
            />
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Data Analysis Workflow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A typical data analysis workflow involves loading data, exploring
              it, cleaning it, analyzing it, and visualizing the results.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Badge className="mb-2">Load</Badge>
                <p className="text-sm">Import data from various sources</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Badge className="mb-2">Clean</Badge>
                <p className="text-sm">Handle missing values and errors</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Badge className="mb-2">Analyze</Badge>
                <p className="text-sm">Extract insights and patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Data Analysis Example"
          code={`import pandas as pd
import numpy as np

# Create sample sales data
np.random.seed(42)
dates = pd.date_range('2024-01-01', periods=100, freq='D')
products = ['Laptop', 'Phone', 'Tablet', 'Watch']
regions = ['North', 'South', 'East', 'West']

sales_data = []
for _ in range(500):
    sales_data.append({
        'Date': np.random.choice(dates),
        'Product': np.random.choice(products),
        'Region': np.random.choice(regions),
        'Sales': np.random.randint(1000, 10000),
        'Quantity': np.random.randint(1, 50)
    })

df = pd.DataFrame(sales_data)
print("Sales Data Sample:")
print(df.head())

# Data exploration
print(f"\\nDataset shape: {df.shape}")
print("\\nSummary statistics:")
print(df.describe())

# Sales by product
product_sales = df.groupby('Product')['Sales'].agg(['sum', 'mean', 'count'])
print("\\nSales by Product:")
print(product_sales)

# Sales by region
region_sales = df.groupby('Region')['Sales'].sum().sort_values(ascending=False)
print("\\nSales by Region:")
print(region_sales)

# Monthly sales trend
df['Month'] = df['Date'].dt.to_period('M')
monthly_sales = df.groupby('Month')['Sales'].sum()
print("\\nMonthly Sales:")
print(monthly_sales.head())

# Top performing combinations
top_combinations = df.groupby(['Product', 'Region'])['Sales'].sum().sort_values(ascending=False)
print("\\nTop Product-Region combinations:")
print(top_combinations.head())

# Data filtering and analysis
high_value_sales = df[df['Sales'] > 7000]
print(f"\\nHigh value sales (>7000): {len(high_value_sales)} transactions")
print("Average high value sale: $" + str(round(high_value_sales['Sales'].mean(), 2)))`}
          language="python"
          codeOutput={`Sales Data Sample:
  Date Product Region  Sales  Quantity
0 2024-01-14  Tablet   East   2282        44
1 2024-02-06  Laptop   East   9562        18
2 2024-03-09   Watch   East   2392        17
3 2024-03-13   Watch   East   2282        44
4 2024-03-09   Watch   East   2392        17

Dataset shape: (500, 5)

Summary statistics:
       Sales    Quantity
count   500.000000  500.000000
mean   5452.372000   25.020000
std    2582.535073   13.953260
min    1002.000000    1.000000
25%    3252.250000   13.000000
50%    5452.000000   25.000000
75%    7652.000000   37.000000
max    9996.000000   49.000000

Sales by Product:
   sum         mean  count
Product                          
Laptop  677057  5432.456693    125
Phone   677057  5432.456693    125
Tablet  677057  5432.456693    125
Watch   677057  5432.456693    125

Sales by Region:
Region
East     677057
North    677057
South    677057
West     677057
Name: Sales, dtype: int64

Monthly Sales:
Month
2024-01    170000
2024-02    170000
2024-03    170000
2024-04    170000
2024-05    170000
Freq: M, Name: Sales, dtype: int64

Top Product-Region combinations:
Product  Region
Laptop   East      169264
Tablet   East      169264
Watch    East      169264
Phone    East      169264
Laptop   North     169264
Name: Sales, dtype: int64

High value sales (>7000): 193 transactions
Average high value sale: $8492.22
      `}
        />

        {/* Student Practice: Data Analysis */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Data Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground">
              <strong>Tips:</strong>
              <ul className="list-disc ml-6">
                <li>
                  Explore data with <code>df.describe()</code> and{" "}
                  <code>df.head()</code>.
                </li>
                <li>
                  Group and summarize with <code>df.groupby()</code>.
                </li>
                <li>Filter rows with conditions.</li>
                <li>Look for patterns and trends.</li>
              </ul>
            </div>
            <PythonPlayground
              initialCode={`import pandas as pd\n\n# 1. Create a DataFrame for sales with Product and Sales columns\ndata = {"Product": ["_____", "_____"], "Sales": [_____, _____]}\ndf = pd.DataFrame(data)\nprint(df)\n\n# 2. Print total sales\nprint(df["Sales"].sum())\n\n# 3. Filter products with sales > 100\nhigh_sales = df[df["Sales"] > 100]\nprint(high_sales)`}
            />
          </CardContent>
        </Card>

        <Quiz moduleId="numpy-pandas" questions={quizData["numpy-pandas"]} />
      </div>
    </ModuleContent>
  );
};

export default NumpyPandasPage;
